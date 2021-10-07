import withCache, { conditionallyUpdateCache } from 'lib/withCache';
import { delay } from 'lib/utils';
import artists from 'data/artists.json';
import events from 'data/events.json';
import venues from 'data/venues.json';
import type { Handler } from 'lib/withCache';
import type { HakkasanRef } from 'lib/types';

const handler: Handler = async (req, res): Promise<void> => {
  const {
    method,
    query: { ref: refParam },
  } = req;
  switch (method) {
    case 'GET': {
      try {
        const hakkasanRefs =
          typeof refParam === 'string'
            ? [refParam]
            : [...new Set(refParam as HakkasanRef[])];

        if (process.env.NODE_ENV !== 'production') {
          await delay(1000);
          res.status(200).send({
            artists,
            events,
            venues,
          });
          break;
        }

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
