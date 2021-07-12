/* istanbul ignore file */
/* eslint-disable import/prefer-default-export */

import { Month } from './types';

export const MONTHS = {
  1: 'January',
  2: 'February',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'August',
  9: 'September',
  10: 'October',
  11: 'November',
  12: 'December',
};

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

export const LAS_VEGAS = 'Las Vegas, NV';

export const VENUE_COLORS = {
  'Wet Republic': 'red-300',
  'Hakkasan Nightclub': 'green-400',
  'OMNIA Las Vegas': 'purple-300',
  'Liquid Pool Lounge': 'blue-300',
};

export const generateYear = (): {
  [year: string]: Month<unknown>;
} => {
  const year = {};
  for (let month = 1; month <= 12; month += 1) {
    year[month] = {
      ...defaultMonth,
    };
  }
  return year;
};

export const LAS_VEGAS_EVENTS_2021 = {
  '2021': {
    '1': {
      '1': [],
      '10': [],
      '11': [],
      '12': [],
      '13': [],
      '14': [],
      '15': [],
      '16': [],
      '17': [],
      '18': [],
      '19': [],
      '2': [],
      '20': [],
      '21': [],
      '22': [],
      '23': [],
      '24': [],
      '25': [],
      '26': [],
      '27': [],
      '28': [],
      '29': [],
      '3': [],
      '30': [],
      '31': [],
      '4': [],
      '5': [],
      '6': [],
      '7': [],
      '8': [],
      '9': [],
    },
    '10': {
      '1': [],
      '10': [],
      '11': [],
      '12': [],
      '13': [],
      '14': [],
      '15': [],
      '16': [],
      '17': [],
      '18': [],
      '19': [],
      '2': [],
      '20': [],
      '21': [],
      '22': [],
      '23': [],
      '24': [],
      '25': [],
      '26': [],
      '27': [],
      '28': [],
      '29': [],
      '3': [],
      '30': [],
      '31': [],
      '4': [],
      '5': [],
      '6': [],
      '7': [],
      '8': [],
      '9': [],
    },
    '11': {
      '1': [],
      '10': [],
      '11': [],
      '12': [],
      '13': [],
      '14': [],
      '15': [],
      '16': [],
      '17': [],
      '18': [],
      '19': [],
      '2': [],
      '20': [],
      '21': [],
      '22': [],
      '23': [],
      '24': [],
      '25': [],
      '26': [],
      '27': [],
      '28': [],
      '29': [],
      '3': [],
      '30': [],
      '31': [],
      '4': [],
      '5': [],
      '6': [],
      '7': [],
      '8': [],
      '9': [],
    },
    '12': {
      '1': [],
      '10': [],
      '11': [],
      '12': [],
      '13': [],
      '14': [],
      '15': [],
      '16': [],
      '17': [],
      '18': [],
      '19': [],
      '2': [],
      '20': [],
      '21': [],
      '22': [],
      '23': [],
      '24': [],
      '25': [],
      '26': [],
      '27': [],
      '28': [],
      '29': [],
      '3': [],
      '30': [],
      '31': [],
      '4': [],
      '5': [],
      '6': [],
      '7': [],
      '8': [],
      '9': [],
    },
    '2': {
      '1': [],
      '10': [],
      '11': [],
      '12': [],
      '13': [],
      '14': [],
      '15': [],
      '16': [],
      '17': [],
      '18': [],
      '19': [],
      '2': [],
      '20': [],
      '21': [],
      '22': [],
      '23': [],
      '24': [],
      '25': [],
      '26': [],
      '27': [],
      '28': [],
      '29': [],
      '3': [],
      '30': [],
      '31': [],
      '4': [],
      '5': [],
      '6': [],
      '7': [],
      '8': [],
      '9': [],
    },
    '3': {
      '1': [],
      '10': [],
      '11': [],
      '12': [],
      '13': [],
      '14': [],
      '15': [],
      '16': [],
      '17': [],
      '18': [],
      '19': [],
      '2': [],
      '20': [],
      '21': [],
      '22': [],
      '23': [],
      '24': [],
      '25': [],
      '26': [],
      '27': [],
      '28': [],
      '29': [],
      '3': [],
      '30': [],
      '31': [],
      '4': [],
      '5': [],
      '6': [],
      '7': [],
      '8': [],
      '9': [],
    },
    '4': {
      '1': [],
      '10': [],
      '11': [],
      '12': [],
      '13': [],
      '14': [],
      '15': [],
      '16': [],
      '17': [],
      '18': [],
      '19': [],
      '2': [],
      '20': [],
      '21': [],
      '22': [],
      '23': [],
      '24': [],
      '25': [],
      '26': [],
      '27': [],
      '28': [],
      '29': [],
      '3': [],
      '30': [],
      '31': [],
      '4': [],
      '5': [],
      '6': [],
      '7': [],
      '8': [],
      '9': [],
    },
    '5': {
      '1': [],
      '10': [],
      '11': [],
      '12': [],
      '13': [],
      '14': [],
      '15': [],
      '16': [],
      '17': [],
      '18': [],
      '19': [],
      '2': [],
      '20': [],
      '21': [],
      '22': [],
      '23': [],
      '24': [],
      '25': [],
      '26': [],
      '27': [],
      '28': [],
      '29': [],
      '3': [],
      '30': [],
      '31': [
        {
          color: 'red-300',
          date: '2021-05-31',
          text: 'Jeff Retro',
        },
        {
          color: 'blue-300',
          date: '2021-05-31',
          text: 'Liquid Monday',
        },
      ],
      '4': [],
      '5': [],
      '6': [],
      '7': [],
      '8': [],
      '9': [],
    },
    '6': {
      '1': [],
      '10': [
        {
          color: 'red-300',
          date: '2021-06-10',
          text: 'Wet Republic Thursday',
        },
        {
          color: 'green-400',
          date: '2021-06-10',
          text: 'Party Favor ',
        },
        {
          color: 'blue-300',
          date: '2021-06-10',
          text: 'Liquid Thursday',
        },
      ],
      '11': [
        {
          color: 'red-300',
          date: '2021-06-11',
          text: 'DJ Shift',
        },
        {
          color: 'purple-300',
          date: '2021-06-11',
          text: 'Steve Aoki',
        },
        {
          color: 'green-400',
          date: '2021-06-11',
          text: 'Lil Jon',
        },
        {
          color: 'blue-300',
          date: '2021-06-11',
          text: 'Liquid Friday',
        },
      ],
      '12': [
        {
          color: 'red-300',
          date: '2021-06-12',
          text: 'Special Guest',
        },
        {
          color: 'purple-300',
          date: '2021-06-12',
          text: 'NGHTMRE',
        },
        {
          color: 'green-400',
          date: '2021-06-12',
          text: 'Loud Luxury',
        },
        {
          color: 'blue-300',
          date: '2021-06-12',
          text: 'Liquid Saturday',
        },
      ],
      '13': [
        {
          color: 'red-300',
          date: '2021-06-13',
          text: 'Steve Aoki',
        },
        {
          color: 'purple-300',
          date: '2021-06-13',
          text: 'OMNIA Sunday',
        },
        {
          color: 'blue-300',
          date: '2021-06-13',
          text: 'Liquid Sunday',
        },
      ],
      '14': [],
      '15': [
        {
          color: 'purple-300',
          date: '2021-06-15',
          text: 'Jeff Retro',
        },
      ],
      '16': [],
      '17': [
        {
          color: 'red-300',
          date: '2021-06-17',
          text: 'Wet Republic Thursday',
        },
        {
          color: 'green-400',
          date: '2021-06-17',
          text: 'NGHTMRE',
        },
        {
          color: 'blue-300',
          date: '2021-06-17',
          text: 'Liquid Thursday',
        },
      ],
      '18': [
        {
          color: 'red-300',
          date: '2021-06-18',
          text: 'DJ Shift',
        },
        {
          color: 'purple-300',
          date: '2021-06-18',
          text: 'Steve Aoki',
        },
        {
          color: 'green-400',
          date: '2021-06-18',
          text: 'Loud Luxury',
        },
        {
          color: 'blue-300',
          date: '2021-06-18',
          text: 'Liquid Friday',
        },
      ],
      '19': [
        {
          color: 'red-300',
          date: '2021-06-19',
          text: 'Kaskade',
        },
        {
          color: 'purple-300',
          date: '2021-06-19',
          text: 'Party Favor ',
        },
        {
          color: 'green-400',
          date: '2021-06-19',
          text: 'Jeff Retro',
        },
        {
          color: 'blue-300',
          date: '2021-06-19',
          text: 'Liquid Saturday',
        },
      ],
      '2': [],
      '20': [
        {
          color: 'red-300',
          date: '2021-06-20',
          text: 'Fergie DJ',
        },
        {
          color: 'purple-300',
          date: '2021-06-20',
          text: 'OMNIA Sunday',
        },
        {
          color: 'blue-300',
          date: '2021-06-20',
          text: 'Liquid Sunday',
        },
      ],
      '21': [],
      '22': [
        {
          color: 'purple-300',
          date: '2021-06-22',
          text: 'Mikey Francis',
        },
      ],
      '23': [],
      '24': [
        {
          color: 'red-300',
          date: '2021-06-24',
          text: 'Wet Republic Thursday',
        },
        {
          color: 'green-400',
          date: '2021-06-24',
          text: 'Vice',
        },
        {
          color: 'blue-300',
          date: '2021-06-24',
          text: 'Liquid Thursday',
        },
      ],
      '25': [
        {
          color: 'red-300',
          date: '2021-06-25',
          text: 'DJ Shift',
        },
        {
          color: 'purple-300',
          date: '2021-06-25',
          text: 'Special Guest',
        },
        {
          color: 'green-400',
          date: '2021-06-25',
          text: 'Tyga',
        },
        {
          color: 'blue-300',
          date: '2021-06-25',
          text: 'Liquid Friday',
        },
      ],
      '26': [
        {
          color: 'red-300',
          date: '2021-06-26',
          text: 'Steve Aoki',
        },
        {
          color: 'purple-300',
          date: '2021-06-26',
          text: 'Loud Luxury',
        },
        {
          color: 'green-400',
          date: '2021-06-26',
          text: 'Kaskade',
        },
        {
          color: 'blue-300',
          date: '2021-06-26',
          text: 'Liquid Saturday',
        },
      ],
      '27': [
        {
          color: 'red-300',
          date: '2021-06-27',
          text: 'NGHTMRE',
        },
        {
          color: 'purple-300',
          date: '2021-06-27',
          text: 'OMNIA Sunday',
        },
        {
          color: 'blue-300',
          date: '2021-06-27',
          text: 'Liquid Sunday',
        },
      ],
      '28': [],
      '29': [
        {
          color: 'purple-300',
          date: '2021-06-29',
          text: 'Fergie DJ',
        },
      ],
      '3': [
        {
          color: 'red-300',
          date: '2021-06-03',
          text: 'Wet Republic Thursday',
        },
        {
          color: 'green-400',
          date: '2021-06-03',
          text: 'Fergie DJ',
        },
        {
          color: 'blue-300',
          date: '2021-06-03',
          text: 'Liquid Thursday',
        },
      ],
      '30': [],
      '31': [],
      '4': [
        {
          color: 'red-300',
          date: '2021-06-04',
          text: 'DJ Shift',
        },
        {
          color: 'purple-300',
          date: '2021-06-04',
          text: 'Steve Aoki',
        },
        {
          color: 'green-400',
          date: '2021-06-04',
          text: 'Tyga',
        },
        {
          color: 'blue-300',
          date: '2021-06-04',
          text: 'Liquid Friday',
        },
      ],
      '5': [
        {
          color: 'red-300',
          date: '2021-06-05',
          text: 'Kaskade',
        },
        {
          color: 'purple-300',
          date: '2021-06-05',
          text: 'Loud Luxury',
        },
        {
          color: 'green-400',
          date: '2021-06-05',
          text: 'Lil Jon',
        },
        {
          color: 'blue-300',
          date: '2021-06-05',
          text: 'Liquid Saturday',
        },
      ],
      '6': [
        {
          color: 'red-300',
          date: '2021-06-06',
          text: 'Niiko x SWAE',
        },
        {
          color: 'purple-300',
          date: '2021-06-06',
          text: 'OMNIA Sunday',
        },
        {
          color: 'blue-300',
          date: '2021-06-06',
          text: 'Liquid Sunday',
        },
      ],
      '7': [],
      '8': [
        {
          color: 'purple-300',
          date: '2021-06-08',
          text: 'Fergie DJ',
        },
      ],
      '9': [],
    },
    '7': {
      '1': [
        {
          color: 'red-300',
          date: '2021-07-01',
          text: 'Wet Republic Thursday',
        },
      ],
      '10': [
        {
          color: 'red-300',
          date: '2021-07-10',
          text: 'Kaskade',
        },
        {
          color: 'purple-300',
          date: '2021-07-10',
          text: 'Steve Aoki',
        },
      ],
      '11': [
        {
          color: 'red-300',
          date: '2021-07-11',
          text: 'Afrojack',
        },
        {
          color: 'purple-300',
          date: '2021-07-11',
          text: 'OMNIA Sunday',
        },
      ],
      '12': [],
      '13': [
        {
          color: 'purple-300',
          date: '2021-07-13',
          text: 'Party Favor ',
        },
      ],
      '14': [],
      '15': [
        {
          color: 'red-300',
          date: '2021-07-15',
          text: 'Wet Republic Thursday',
        },
      ],
      '16': [
        {
          color: 'red-300',
          date: '2021-07-16',
          text: 'DJ Shift',
        },
        {
          color: 'purple-300',
          date: '2021-07-16',
          text: 'Steve Aoki',
        },
      ],
      '17': [
        {
          color: 'red-300',
          date: '2021-07-17',
          text: 'Special Guest',
        },
        {
          color: 'purple-300',
          date: '2021-07-17',
          text: 'Illenium',
        },
      ],
      '18': [
        {
          color: 'red-300',
          date: '2021-07-18',
          text: 'Special Guest',
        },
        {
          color: 'purple-300',
          date: '2021-07-18',
          text: 'OMNIA Sunday',
        },
      ],
      '19': [],
      '2': [
        {
          color: 'red-300',
          date: '2021-07-02',
          text: 'DJ Shift',
        },
        {
          color: 'purple-300',
          date: '2021-07-02',
          text: 'Steve Aoki',
        },
      ],
      '20': [
        {
          color: 'purple-300',
          date: '2021-07-20',
          text: 'OMNIA Tuesday',
        },
      ],
      '21': [],
      '22': [
        {
          color: 'red-300',
          date: '2021-07-22',
          text: 'Wet Republic Thursday',
        },
      ],
      '23': [
        {
          color: 'red-300',
          date: '2021-07-23',
          text: 'DJ Shift',
        },
        {
          color: 'purple-300',
          date: '2021-07-23',
          text: 'Martin Garrix',
        },
      ],
      '24': [
        {
          color: 'red-300',
          date: '2021-07-24',
          text: 'Martin Garrix',
        },
        {
          color: 'purple-300',
          date: '2021-07-24',
          text: 'Steve Aoki',
        },
      ],
      '25': [
        {
          color: 'red-300',
          date: '2021-07-25',
          text: 'Afrojack',
        },
        {
          color: 'purple-300',
          date: '2021-07-25',
          text: 'OMNIA Sunday',
        },
      ],
      '26': [],
      '27': [
        {
          color: 'purple-300',
          date: '2021-07-27',
          text: 'OMNIA Tuesday',
        },
      ],
      '28': [],
      '29': [
        {
          color: 'red-300',
          date: '2021-07-29',
          text: 'Wet Republic Thursday',
        },
      ],
      '3': [
        {
          color: 'red-300',
          date: '2021-07-03',
          text: 'Kaskade',
        },
        {
          color: 'purple-300',
          date: '2021-07-03',
          text: 'OMNIA Saturday',
        },
      ],
      '30': [
        {
          color: 'red-300',
          date: '2021-07-30',
          text: 'DJ Shift',
        },
        {
          color: 'purple-300',
          date: '2021-07-30',
          text: 'Martin Garrix',
        },
      ],
      '31': [
        {
          color: 'red-300',
          date: '2021-07-31',
          text: 'Martin Garrix',
        },
        {
          color: 'purple-300',
          date: '2021-07-31',
          text: 'Loud Luxury',
        },
      ],
      '4': [
        {
          color: 'red-300',
          date: '2021-07-04',
          text: 'Afrojack',
        },
        {
          color: 'purple-300',
          date: '2021-07-04',
          text: 'OMNIA Sunday',
        },
      ],
      '5': [],
      '6': [
        {
          color: 'purple-300',
          date: '2021-07-06',
          text: 'OMNIA Tuesday',
        },
      ],
      '7': [],
      '8': [
        {
          color: 'red-300',
          date: '2021-07-08',
          text: 'Wet Republic Thursday',
        },
      ],
      '9': [
        {
          color: 'red-300',
          date: '2021-07-09',
          text: 'DJ Shift',
        },
        {
          color: 'purple-300',
          date: '2021-07-09',
          text: 'Illenium',
        },
      ],
    },
    '8': {
      '1': [
        {
          color: 'red-300',
          date: '2021-08-01',
          text: 'Special Guest',
        },
        {
          color: 'purple-300',
          date: '2021-08-01',
          text: 'OMNIA Sunday',
        },
      ],
      '10': [],
      '11': [],
      '12': [],
      '13': [],
      '14': [],
      '15': [],
      '16': [],
      '17': [],
      '18': [],
      '19': [],
      '2': [],
      '20': [],
      '21': [],
      '22': [],
      '23': [],
      '24': [],
      '25': [],
      '26': [],
      '27': [],
      '28': [],
      '29': [],
      '3': [],
      '30': [],
      '31': [],
      '4': [],
      '5': [],
      '6': [],
      '7': [],
      '8': [],
      '9': [],
    },
    '9': {
      '1': [],
      '10': [],
      '11': [],
      '12': [],
      '13': [],
      '14': [],
      '15': [],
      '16': [],
      '17': [],
      '18': [],
      '19': [],
      '2': [],
      '20': [],
      '21': [],
      '22': [],
      '23': [],
      '24': [],
      '25': [],
      '26': [],
      '27': [],
      '28': [],
      '29': [],
      '3': [],
      '30': [],
      '31': [],
      '4': [],
      '5': [],
      '6': [],
      '7': [],
      '8': [],
      '9': [],
    },
  },
};

export const BAJA_CALIFORNIA_SUR_EVENTS_2021 = {
  '2021': {
    '1': {
      '1': [],
      '10': [],
      '11': [],
      '12': [],
      '13': [],
      '14': [],
      '15': [],
      '16': [],
      '17': [],
      '18': [],
      '19': [],
      '2': [],
      '20': [],
      '21': [],
      '22': [],
      '23': [],
      '24': [],
      '25': [],
      '26': [],
      '27': [],
      '28': [],
      '29': [],
      '3': [],
      '30': [],
      '31': [],
      '4': [],
      '5': [],
      '6': [],
      '7': [],
      '8': [],
      '9': [],
    },
    '10': {
      '1': [],
      '10': [],
      '11': [],
      '12': [],
      '13': [],
      '14': [],
      '15': [],
      '16': [],
      '17': [],
      '18': [],
      '19': [],
      '2': [],
      '20': [],
      '21': [],
      '22': [],
      '23': [],
      '24': [],
      '25': [],
      '26': [],
      '27': [],
      '28': [],
      '29': [],
      '3': [],
      '30': [],
      '31': [],
      '4': [],
      '5': [],
      '6': [],
      '7': [],
      '8': [],
      '9': [],
    },
    '11': {
      '1': [],
      '10': [],
      '11': [],
      '12': [],
      '13': [],
      '14': [],
      '15': [],
      '16': [],
      '17': [],
      '18': [],
      '19': [],
      '2': [],
      '20': [],
      '21': [],
      '22': [],
      '23': [],
      '24': [],
      '25': [],
      '26': [],
      '27': [],
      '28': [],
      '29': [],
      '3': [],
      '30': [],
      '31': [],
      '4': [],
      '5': [],
      '6': [],
      '7': [],
      '8': [],
      '9': [],
    },
    '12': {
      '1': [],
      '10': [],
      '11': [],
      '12': [],
      '13': [],
      '14': [],
      '15': [],
      '16': [],
      '17': [],
      '18': [],
      '19': [],
      '2': [],
      '20': [],
      '21': [],
      '22': [],
      '23': [],
      '24': [],
      '25': [],
      '26': [],
      '27': [],
      '28': [],
      '29': [],
      '3': [],
      '30': [],
      '31': [],
      '4': [],
      '5': [],
      '6': [],
      '7': [],
      '8': [],
      '9': [],
    },
    '2': {
      '1': [],
      '10': [],
      '11': [],
      '12': [],
      '13': [],
      '14': [],
      '15': [],
      '16': [],
      '17': [],
      '18': [],
      '19': [],
      '2': [],
      '20': [],
      '21': [],
      '22': [],
      '23': [],
      '24': [],
      '25': [],
      '26': [],
      '27': [],
      '28': [],
      '29': [],
      '3': [],
      '30': [],
      '31': [],
      '4': [],
      '5': [],
      '6': [],
      '7': [],
      '8': [],
      '9': [],
    },
    '3': {
      '1': [],
      '10': [],
      '11': [],
      '12': [],
      '13': [],
      '14': [],
      '15': [],
      '16': [],
      '17': [],
      '18': [],
      '19': [],
      '2': [],
      '20': [],
      '21': [],
      '22': [],
      '23': [],
      '24': [],
      '25': [],
      '26': [],
      '27': [],
      '28': [],
      '29': [],
      '3': [],
      '30': [],
      '31': [],
      '4': [],
      '5': [],
      '6': [],
      '7': [],
      '8': [],
      '9': [],
    },
    '4': {
      '1': [],
      '10': [],
      '11': [],
      '12': [],
      '13': [],
      '14': [],
      '15': [],
      '16': [],
      '17': [],
      '18': [],
      '19': [],
      '2': [],
      '20': [],
      '21': [],
      '22': [],
      '23': [],
      '24': [],
      '25': [],
      '26': [],
      '27': [],
      '28': [],
      '29': [],
      '3': [],
      '30': [],
      '31': [],
      '4': [],
      '5': [],
      '6': [],
      '7': [],
      '8': [],
      '9': [],
    },
    '5': {
      '1': [],
      '10': [],
      '11': [],
      '12': [],
      '13': [],
      '14': [],
      '15': [],
      '16': [],
      '17': [],
      '18': [],
      '19': [],
      '2': [],
      '20': [],
      '21': [],
      '22': [],
      '23': [],
      '24': [],
      '25': [],
      '26': [],
      '27': [],
      '28': [],
      '29': [],
      '3': [],
      '30': [],
      '31': [],
      '4': [],
      '5': [],
      '6': [],
      '7': [],
      '8': [],
      '9': [],
    },
    '6': {
      '1': [],
      '10': [],
      '11': [
        {
          color: 'black',
          date: '2021-06-11',
          text: 'OMNIA Los Cabos Fridays',
        },
      ],
      '12': [
        {
          color: 'black',
          date: '2021-06-12',
          text: 'OMNIA Los Cabos Saturdays',
        },
      ],
      '13': [
        {
          color: 'black',
          date: '2021-06-13',
          text: 'OMNIA Los Cabos Sundays',
        },
      ],
      '14': [],
      '15': [],
      '16': [],
      '17': [],
      '18': [
        {
          color: 'black',
          date: '2021-06-18',
          text: 'OMNIA Los Cabos Fridays',
        },
      ],
      '19': [
        {
          color: 'black',
          date: '2021-06-19',
          text: 'OMNIA Los Cabos Saturdays',
        },
      ],
      '2': [],
      '20': [
        {
          color: 'black',
          date: '2021-06-20',
          text: 'OMNIA Los Cabos Sundays',
        },
      ],
      '21': [],
      '22': [],
      '23': [],
      '24': [],
      '25': [
        {
          color: 'black',
          date: '2021-06-25',
          text: 'OMNIA Los Cabos Fridays',
        },
      ],
      '26': [
        {
          color: 'black',
          date: '2021-06-26',
          text: 'OMNIA Los Cabos Saturdays',
        },
      ],
      '27': [
        {
          color: 'black',
          date: '2021-06-27',
          text: 'OMNIA Los Cabos Sundays',
        },
      ],
      '28': [],
      '29': [],
      '3': [],
      '30': [],
      '31': [],
      '4': [
        {
          color: 'black',
          date: '2021-06-04',
          text: 'OMNIA Los Cabos Fridays',
        },
      ],
      '5': [
        {
          color: 'black',
          date: '2021-06-05',
          text: 'OMNIA Los Cabos Saturdays',
        },
      ],
      '6': [
        {
          color: 'black',
          date: '2021-06-06',
          text: 'OMNIA Los Cabos Sundays',
        },
      ],
      '7': [],
      '8': [],
      '9': [],
    },
    '7': {
      '1': [],
      '10': [
        {
          color: 'black',
          date: '2021-07-10',
          text: 'OMNIA Los Cabos Saturdays',
        },
      ],
      '11': [
        {
          color: 'black',
          date: '2021-07-11',
          text: 'OMNIA Los Cabos Sundays',
        },
      ],
      '12': [],
      '13': [],
      '14': [],
      '15': [],
      '16': [
        {
          color: 'black',
          date: '2021-07-16',
          text: 'OMNIA Los Cabos Fridays',
        },
      ],
      '17': [
        {
          color: 'black',
          date: '2021-07-17',
          text: 'OMNIA Los Cabos Saturdays',
        },
      ],
      '18': [
        {
          color: 'black',
          date: '2021-07-18',
          text: 'OMNIA Los Cabos Sundays',
        },
      ],
      '19': [],
      '2': [
        {
          color: 'black',
          date: '2021-07-02',
          text: 'OMNIA Los Cabos Fridays',
        },
      ],
      '20': [],
      '21': [],
      '22': [],
      '23': [
        {
          color: 'black',
          date: '2021-07-23',
          text: 'OMNIA Los Cabos Fridays',
        },
      ],
      '24': [
        {
          color: 'black',
          date: '2021-07-24',
          text: 'OMNIA Los Cabos Saturdays',
        },
      ],
      '25': [
        {
          color: 'black',
          date: '2021-07-25',
          text: 'OMNIA Los Cabos Sundays',
        },
      ],
      '26': [],
      '27': [],
      '28': [],
      '29': [],
      '3': [
        {
          color: 'black',
          date: '2021-07-03',
          text: 'OMNIA Los Cabos Saturdays',
        },
      ],
      '30': [
        {
          color: 'black',
          date: '2021-07-30',
          text: 'OMNIA Los Cabos Fridays',
        },
      ],
      '31': [
        {
          color: 'black',
          date: '2021-07-31',
          text: 'OMNIA Los Cabos Saturdays',
        },
      ],
      '4': [
        {
          color: 'black',
          date: '2021-07-04',
          text: 'OMNIA Los Cabos Sundays',
        },
      ],
      '5': [],
      '6': [],
      '7': [],
      '8': [],
      '9': [
        {
          color: 'black',
          date: '2021-07-09',
          text: 'OMNIA Los Cabos Fridays',
        },
      ],
    },
    '8': {
      '1': [
        {
          color: 'black',
          date: '2021-08-01',
          text: 'OMNIA Los Cabos Sundays',
        },
      ],
      '10': [],
      '11': [],
      '12': [],
      '13': [
        {
          color: 'black',
          date: '2021-08-13',
          text: 'OMNIA Los Cabos Fridays',
        },
      ],
      '14': [
        {
          color: 'black',
          date: '2021-08-14',
          text: 'OMNIA Los Cabos Saturdays',
        },
      ],
      '15': [
        {
          color: 'black',
          date: '2021-08-15',
          text: 'OMNIA Los Cabos Sundays',
        },
      ],
      '16': [],
      '17': [],
      '18': [],
      '19': [],
      '2': [],
      '20': [
        {
          color: 'black',
          date: '2021-08-20',
          text: 'OMNIA Los Cabos Fridays',
        },
      ],
      '21': [
        {
          color: 'black',
          date: '2021-08-21',
          text: 'OMNIA Los Cabos Saturdays',
        },
      ],
      '22': [
        {
          color: 'black',
          date: '2021-08-22',
          text: 'OMNIA Los Cabos Sundays',
        },
      ],
      '23': [],
      '24': [],
      '25': [],
      '26': [],
      '27': [
        {
          color: 'black',
          date: '2021-08-27',
          text: 'OMNIA Los Cabos Fridays',
        },
      ],
      '28': [
        {
          color: 'black',
          date: '2021-08-28',
          text: 'OMNIA Los Cabos Saturdays',
        },
      ],
      '29': [
        {
          color: 'black',
          date: '2021-08-29',
          text: 'OMNIA Los Cabos Sundays',
        },
      ],
      '3': [],
      '30': [],
      '31': [],
      '4': [],
      '5': [],
      '6': [
        {
          color: 'black',
          date: '2021-08-06',
          text: 'OMNIA Los Cabos Fridays',
        },
      ],
      '7': [
        {
          color: 'black',
          date: '2021-08-07',
          text: 'OMNIA Los Cabos Saturdays',
        },
      ],
      '8': [
        {
          color: 'black',
          date: '2021-08-08',
          text: 'OMNIA Los Cabos Sundays',
        },
      ],
      '9': [],
    },
    '9': {
      '1': [],
      '10': [],
      '11': [],
      '12': [],
      '13': [],
      '14': [],
      '15': [],
      '16': [],
      '17': [],
      '18': [],
      '19': [],
      '2': [],
      '20': [],
      '21': [],
      '22': [],
      '23': [],
      '24': [],
      '25': [],
      '26': [],
      '27': [],
      '28': [],
      '29': [],
      '3': [],
      '30': [],
      '31': [],
      '4': [],
      '5': [],
      '6': [],
      '7': [],
      '8': [],
      '9': [],
    },
  },
};
