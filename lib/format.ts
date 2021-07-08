/* eslint-disable import/prefer-default-export */
import type {
  HakkasanResponse,
  CalendarEvents,
  GenericEvent,
  Filter,
} from 'lib/types';

const defaultMonth = {
  1: [],
  2: [],
  3: [],
  4: [],
  5: [],
  6: [],
  7: [],
  8: [],
  9: [],
  10: [],
  11: [],
  12: [],
  13: [],
  14: [],
  15: [],
  16: [],
  17: [],
  18: [],
  19: [],
  20: [],
  21: [],
  22: [],
  23: [],
  24: [],
  25: [],
  26: [],
  27: [],
  28: [],
  29: [],
  30: [],
  31: [],
};

const LOCATION = 'Las Vegas, NV';

const VENUE_COLORS = {
  'Wet Republic': 'red-300',
  'Hakkasan Nightclub': 'green-400',
  'OMNIA Las Vegas': 'purple-300',
  'Liquid Pool Lounge': 'blue-300',
};

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
      const color = VENUE_COLORS[venueTitle] || 'black';

      venuesById[venueId] = {
        id: venueId,
        name: venueTitle,
        color,
      };

      artistsById[headliner] = {
        id: headliner,
        name: artistNamesByHeadlinerId[headliner],
        color: 'gray-500',
      };

      return {
        date,
        text: artistNamesByHeadlinerId[headliner],
        color,
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

export const getMonthPlaceholderDates = ({
  year,
  month,
}: {
  year: number;
  month: number;
}): {
  lastDate: number;
  previousMonthPlaceholderDates: number[];
  nextMonthPlaceholderDates: number[];
} => {
  const isJanuary = month === 1;
  const monthStartDay = isJanuary
    ? new Date(year - 1, 12).getDay()
    : new Date(year, month - 1).getDay();
  const previousMonthEnd = isJanuary
    ? new Date(year - 1, 12, 0)
    : new Date(year, month - 1, 0);
  const monthEnd = new Date(year, month, 0);

  const previousMonthPlaceholderDates = [];
  let previousMonthDate = previousMonthEnd.getDate();
  while (previousMonthPlaceholderDates.length < monthStartDay) {
    previousMonthPlaceholderDates.unshift(previousMonthDate);
    previousMonthDate -= 1;
  }

  const nextMonthPlaceholderDates = [];
  let nextMonthDate = 1;
  while (nextMonthPlaceholderDates.length < 7 - monthEnd.getDay()) {
    nextMonthPlaceholderDates.push(nextMonthDate);
    nextMonthDate += 1;
  }

  return {
    lastDate: monthEnd.getDate(),
    previousMonthPlaceholderDates,
    nextMonthPlaceholderDates,
  };
};
