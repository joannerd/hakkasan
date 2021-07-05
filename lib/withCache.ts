/* istanbul ignore file */
import { NextApiRequest, NextApiResponse } from 'next';
import { CronJob } from 'cron';
import Cache from 'lib/cache';
import { fetchHakkasanByRef } from 'lib/hakkasan';
import type { HakkasanByRefResponse, HakkasanRef } from 'lib/types';

const cache = new Cache<HakkasanByRefResponse>();

interface HakkasanRequest extends NextApiRequest {
  query: {
    ref: HakkasanRef | HakkasanRef[];
  };
  cache: Cache<HakkasanByRefResponse>;
}

export type Handler = (
  req: HakkasanRequest,
  res: NextApiResponse
) => Promise<void>;

const cron = new CronJob(
  '0 0 0 * * *',
  // '* * * * * *', // Cron job every second for testing purposes
  cache.clear,
  null,
  false,
  'America/Los_Angeles'
);

export const conditionallyUpdateCache = (
  ref: HakkasanRef,
  routeCache: Cache<HakkasanByRefResponse>
): Promise<string> =>
  new Promise((resolve) => {
    if (!routeCache.has(ref)) {
      fetchHakkasanByRef(ref).then((res) => {
        routeCache.set(ref, res as HakkasanByRefResponse);
        resolve(ref);
      });
    } else {
      resolve(ref);
    }
  });

const withCache =
  (handler: Handler): Handler =>
  async (req, res) => {
    cron.start();
    req.cache = cache;
    return handler(req, res);
  };

export default withCache;
