import { NextApiResponse } from 'next';
import withCache, { conditionallyUpdateCache } from 'lib/withCache';
import { delay } from 'lib/utils';
import artists from 'data/artists.json';
import events from 'data/events.json';
import venues from 'data/venues.json';
import type { HakkasanRequest } from 'lib/withCache';

const handler = async (
  req: HakkasanRequest,
  res: NextApiResponse
): Promise<void> => {
  const {
    method,
    query: { ref: refParam },
  } = req;
  switch (method) {
    case 'GET': {
      try {
        if (process.env.NODE_ENV !== 'production') {
          await delay(1000, () => {
            res.status(200).send({
              artists,
              events,
              venues,
            });
          });
          break;
        }

        const hakkasanRefs =
          typeof refParam === 'string' ? [refParam] : [...new Set(refParam)];
        const promises = hakkasanRefs.map((ref) =>
          conditionallyUpdateCache(ref, req.cache)
        );
        await Promise.all(promises);

        const data = req.cache.getValues(hakkasanRefs);
        res.status(200).send(data);
      } catch (e) {
        res.status(500).send({
          success: false,
          message: e.message || 'Error retrieving Hakkasan data',
        });
      }
      break;
    }
    default:
      break;
  }
};

export default withCache(handler);
