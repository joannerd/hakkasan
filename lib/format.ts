/* eslint-disable import/prefer-default-export */
import type {
  HakkasanResponse,
  FormattedHakkasanCalendarData,
} from 'lib/types';
import { generateYear, VENUE_COLORS } from 'lib/constants';

export const formatHakkasanDataIntoCalendar = ({
  data,
  city,
}: {
  data: Omit<HakkasanResponse, 'venues'>;
  city: string;
}): FormattedHakkasanCalendarData => {
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
    .filter(({ location }) => location === city)
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
  lastDay: number;
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
    lastDay: monthEnd.getDay(),
    previousMonthPlaceholderDates,
    nextMonthPlaceholderDates,
  };
};
