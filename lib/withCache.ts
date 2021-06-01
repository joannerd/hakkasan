import { NextApiRequest, NextApiResponse } from 'next';
import { CronJob } from 'cron';
import cache from './cache';
import { fetchHakkasanByRef } from './hakkasan';
import type { HakkasanByRefResponse } from './hakkasan';
import type { Cache } from './cache';

export interface HakkasanRequest extends NextApiRequest {
  query: {
    ref: string | string[];
  };
  cache: Cache<HakkasanByRefResponse>;
}

type Handler = (req: HakkasanRequest, res: NextApiResponse) => Promise<void>;

const cron = new CronJob(
  '00 00 00 * * *',
  // '* * * * * *', // Cron job every second for testing purposes
  async () => cache.clear(),
  null,
  false,
  'America/Los_Angeles'
);

export const conditionallyUpdateCache = async (
  ref: string,
  routeCache: Cache<HakkasanByRefResponse>
): Promise<void> => {
  if (!routeCache.has(ref)) {
    const res = await fetchHakkasanByRef(ref);
    routeCache.set(ref, res as HakkasanByRefResponse);
  }
};

const withCache = (handler: Handler): Handler => async (req, res) => {
    cron.start();
    req.cache = cache;
    return handler(req, res);
  };

export default withCache;
