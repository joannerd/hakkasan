import {
  formatHakkasanDataIntoCalendar,
  getMonthPlaceholderDates,
} from 'lib/format';
import events from 'data/events.json';
import artists from 'data/artists.json';
import {
  LAS_VEGAS,
  LAS_VEGAS_EVENTS_2021,
  BAJA_CALIFORNIA_SUR_EVENTS_2021,
} from 'lib/constants';
import type {
  HakkasanResponse,
  FormattedHakkasanCalendarData,
} from 'lib/types';

jest.mock('node-fetch', () => jest.fn());

describe('formatHakkasanDataIntoCalendar(data)', () => {
  let testCases: {
    input: { data: Omit<HakkasanResponse, 'venues'>; city: string };
    expectedOutput: FormattedHakkasanCalendarData;
  }[];
  beforeEach(() => {
    testCases = [
      {
        input: {
          data: {
            events,
            artists,
          },
          city: LAS_VEGAS,
        },
        expectedOutput: {
          events: LAS_VEGAS_EVENTS_2021,
          venues: [
            {
              color: 'red-300',
              id: 36,
              name: 'Wet Republic',
            },
            {
              color: 'green-400',
              id: 1374,
              name: 'Hakkasan Nightclub',
            },
            {
              color: 'purple-300',
              id: 1544,
              name: 'OMNIA Las Vegas',
            },
            {
              color: 'blue-300',
              id: 1552,
              name: 'Liquid Pool Lounge',
            },
          ],
          artists: [
            {
              color: 'gray-500',
              id: 3,
              name: 'Afrojack',
            },
            {
              color: 'gray-500',
              id: 35,
              name: 'Fergie DJ',
            },
            {
              color: 'gray-500',
              id: 41,
              name: 'Jeff Retro',
            },
            {
              color: 'gray-500',
              id: 50,
              name: 'Martin Garrix',
            },
            {
              color: 'gray-500',
              id: 88,
              name: 'Steve Aoki',
            },
            {
              color: 'gray-500',
              id: 107,
              name: 'Vice',
            },
            {
              color: 'gray-500',
              id: 140,
              name: 'DJ Shift',
            },
            {
              color: 'gray-500',
              id: 141,
              name: 'Special Guest',
            },
            {
              color: 'gray-500',
              id: 184,
              name: 'Lil Jon',
            },
            {
              color: 'gray-500',
              id: 224,
              name: 'NGHTMRE',
            },
            {
              color: 'gray-500',
              id: 282,
              name: 'Party Favor ',
            },
            {
              color: 'gray-500',
              id: 290,
              name: 'Illenium',
            },
            {
              color: 'gray-500',
              id: 301,
              name: 'Mikey Francis',
            },
            {
              color: 'gray-500',
              id: 306,
              name: 'Kaskade',
            },
            {
              color: 'gray-500',
              id: 320,
              name: 'OMNIA Sunday',
            },
            {
              color: 'gray-500',
              id: 422,
              name: 'OMNIA Tuesday',
            },
            {
              color: 'gray-500',
              id: 424,
              name: 'OMNIA Saturday',
            },
            {
              color: 'gray-500',
              id: 433,
              name: 'Wet Republic Thursday',
            },
            {
              color: 'gray-500',
              id: 437,
              name: 'Liquid Thursday',
            },
            {
              color: 'gray-500',
              id: 438,
              name: 'Liquid Friday',
            },
            {
              color: 'gray-500',
              id: 439,
              name: 'Liquid Saturday',
            },
            {
              color: 'gray-500',
              id: 440,
              name: 'Liquid Sunday',
            },
            {
              color: 'gray-500',
              id: 515,
              name: 'Tyga',
            },
            {
              color: 'gray-500',
              id: 554,
              name: 'Loud Luxury',
            },
            {
              color: 'gray-500',
              id: 624,
              name: 'Niiko x SWAE',
            },
            {
              color: 'gray-500',
              id: 787,
              name: 'Liquid Monday',
            },
          ],
        },
      },
    ];
  });

  test('should format hakkasan data correctly', () => {
    testCases.forEach(({ input, expectedOutput }) => {
      const output = formatHakkasanDataIntoCalendar(input);
      expect(expectedOutput).toEqual(output);
    });
  });

  test('should set a venue color to black by default', () => {
    const input = {
      data: {
        events,
        artists,
      },
      city: 'San José del Cabo, Baja California Sur',
    };
    const expectedOutput = {
      events: BAJA_CALIFORNIA_SUR_EVENTS_2021,
      artists: [
        {
          color: 'gray-500',
          id: 467,
          name: 'OMNIA Los Cabos Fridays',
        },
        {
          color: 'gray-500',
          id: 468,
          name: 'OMNIA Los Cabos Saturdays',
        },
        {
          color: 'gray-500',
          id: 469,
          name: 'OMNIA Los Cabos Sundays',
        },
      ],
      venues: [
        {
          color: 'black',
          id: 1584,
          name: 'OMNIA Los Cabos',
        },
      ],
    };
    const output = formatHakkasanDataIntoCalendar(input);
    expect(expectedOutput).toEqual(output);
  });
});

describe('getMonthPlaceholderDates({ year, month })', () => {
  test('should get placeholder date information correctly for January months', () => {
    const input = {
      year: 2021,
      month: 1,
    };
    const expectedOutput = {
      lastDate: 31,
      lastDay: 0,
      previousMonthPlaceholderDates: [27, 28, 29, 30, 31],
      nextMonthPlaceholderDates: [1, 2, 3, 4, 5, 6, 7],
    };

    const output = getMonthPlaceholderDates(input);
    expect(expectedOutput).toEqual(output);
  });

  test('should get placeholder date information correctly for February months', () => {
    const input = {
      year: 2021,
      month: 2,
    };
    const expectedOutput = {
      lastDate: 28,
      lastDay: 0,
      previousMonthPlaceholderDates: [31],
      nextMonthPlaceholderDates: [1, 2, 3, 4, 5, 6, 7],
    };

    const output = getMonthPlaceholderDates(input);
    expect(expectedOutput).toEqual(output);
  });

  test('should get placeholder date information correctly for non-January and non-February months', () => {
    const input = {
      year: 2020,
      month: 12,
    };
    const expectedOutput = {
      lastDate: 31,
      lastDay: 4,
      previousMonthPlaceholderDates: [29, 30],
      nextMonthPlaceholderDates: [1, 2, 3],
    };

    const output = getMonthPlaceholderDates(input);
    expect(expectedOutput).toEqual(output);
  });
});
