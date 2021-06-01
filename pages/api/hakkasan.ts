import { NextApiResponse } from 'next';
import withCache, { conditionallyUpdateCache } from '../../lib/withCache';
import artists from '../../data/artists.json';
import events from '../../data/events.json';
import venues from '../../data/venues.json';
import type { HakkasanRequest } from '../../lib/withCache';

const handler = async (
  req: HakkasanRequest,
  res: NextApiResponse
): Promise<void> => {
  const {
    method,
    query: { ref },
  } = req;
  switch (method) {
    case 'POST':
      break;
    case 'PUT':
      break;
    case 'PATCH':
      break;
    default: {
      try {
        if (process.env.NODE_ENV !== 'production') {
          res.status(200).send({
            artists,
            events,
            venues,
          });
          break;
        }

        const hakkasanRefs =
          typeof ref === 'string' ? [ref] : [...new Set(ref)];
        const promises = hakkasanRefs.map(async (account) =>
          conditionallyUpdateCache(account, req.cache)
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
  }
};

export default withCache(handler);
