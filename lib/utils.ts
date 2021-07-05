import { defaultMonth, LOCATION, VENUE_COLORS } from 'lib/constants';
import type {
  HakkasanResponse,
  CalendarEvents,
  GenericEvent,
  Filter,
} from 'lib/types';

export const delay = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(() => resolve(), ms));

const generateYear = () => {
  const year = {};
  for (let month = 1; month <= 12; month += 1) {
    year[month] = {
      ...defaultMonth,
    };
  }
  return year;
};

export const formatHakkasanDataIntoCalendar = (
  data: HakkasanResponse
): {
  events: CalendarEvents<GenericEvent>;
  venues: Filter[];
  artists: Filter[];
} => {
  const {
    events: { data: eventsData },
    artists: { data: artistsData },
  } = data;

  const artistNamesByHeadlinerId = {};
  artistsData.forEach(({ id, name }) => {
    artistNamesByHeadlinerId[id] = name;
  });

  const artistsById = {};
  const venuesById = {};
  const events = eventsData
    .filter(({ location }) => location === LOCATION)
    .map(({ date, headliner, venue_id: venueId, venue_title: venueTitle }) => {
      venuesById[venueId] = {
        id: venueId,
        name: venueTitle,
        color: VENUE_COLORS[venueTitle] || 'black',
      };

      artistsById[headliner] = {
        id: headliner,
        name: artistNamesByHeadlinerId[headliner],
        color: 'gray-500',
      };

      return {
        date,
        text: artistNamesByHeadlinerId[headliner],
        color: VENUE_COLORS[venueTitle],
      };
    });

  const calendarEvents = {};

  events.forEach((event) => {
    const { date } = event;
    const [year, month, day] = date
      .split('-')
      .map((string) => parseInt(string, 10));

    if (!calendarEvents[year]) {
      calendarEvents[year] = generateYear();
    }

    calendarEvents[year][month][day] = [
      ...calendarEvents[year][month][day],
      event,
    ];
  });

  return {
    events: calendarEvents,
    venues: Object.values(venuesById),
    artists: Object.values(artistsById),
  };
};
