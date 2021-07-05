/* istanbul ignore file */
import { NextApiRequest, NextApiResponse } from 'next';
import { CronJob } from 'cron';
import cache from './cache';
import { fetchHakkasanByRef } from './hakkasan';
import type { HakkasanByRefResponse, HakkasanRef } from './hakkasan';
import type { Cache } from './cache';

export interface HakkasanRequest extends NextApiRequest {
  query: {
    ref: HakkasanRef | HakkasanRef[];
  };
  cache: Cache<HakkasanByRefResponse>;
}

type Handler = (req: HakkasanRequest, res: NextApiResponse) => Promise<void>;

const cron = new CronJob(
  '0 0 0 * * *',
  // '* * * * * *', // Cron job every second for testing purposes
  cache.clear,
  null,
  false,
  'America/Los_Angeles'
);

export const conditionallyUpdateCache = async (
  ref: HakkasanRef,
  routeCache: Cache<HakkasanByRefResponse>
): Promise<void> => {
  if (routeCache.has(ref)) {
    return;
  }

  const res = await fetchHakkasanByRef(ref);

  if (!res.data.length) {
    return;
  }

  routeCache.set(ref, res as HakkasanByRefResponse);
};

const withCache =
  (handler: Handler): Handler =>
  async (req, res) => {
    cron.start();
    req.cache = cache;
    return handler(req, res);
  };

export default withCache;
