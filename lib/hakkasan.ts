/* eslint-disable no-shadow, camelcase */
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

interface Response<T> {
  data: Array<T>;
  ref: string;
  dataType: string;
}

export type Artist = {
  id: number;
  createdAt: string;
  dataType: string;
  friendly_id: string;
  name: string;
  updatedAt: string;
};

export type Event = {
  id: number;
  venue_id: number;
  dayOfTheWeek: number;
  headliner: number;
  active: boolean;
  show_in_calendars: boolean;
  public_reservations: boolean;
  public_guestlists: boolean;
  has_public_tickets: boolean;
  title: string;
  location: string;
  venue_title: string;
  date: string;
  open: string;
  close: string;
  tickets_URL: string;
  flyer_url: string;
  tag_list: string[];
};

type VenueArea = {
  id: number;
  title: string;
};

export type Venue = {
  id: number;
  length: number;
  time_zone_offset: number;
  areas: VenueArea[];
  address: string;
  city: string;
  country: string;
  createdAt: string;
  dataType: string;
  description: string;
  friendly_id: string;
  home_URL: string;
  location: string;
  phone: string;
  state: string;
  time_zone: string;
  title: string;
  updatedAt: string;
  zip: string;
}

export type HakkasanResponse = {
  artists: Response<Artist>; // TODO
  events: Response<Event>;
  venues: Response<Venue>; // TODO
};

export type HakkasanByRefResponse = Response<Artist> | Response<Event> | Response<Venue>;

export const parseHakkasanData = async <T>(text: string): Promise<Response<T>> => {
  try {
    const dataString = text.split('retrieveJSONP(')[1];
    const trimmedDataString = dataString.slice(0, dataString.length - 2);
    const data = await JSON.parse(trimmedDataString);
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export const fetchHakkasanByRef = async <T>(ref: string): Promise<Response<T>> => {
  try {
    const res = await fetch(`${publicRuntimeConfig.hakkasanApiUrl}/${ref}.json`);
    const text = await res.text();
    const data = await parseHakkasanData<T>(text);
    return data;
  } catch (err) {
    return {
      data: [],
      ref: err.message,
      dataType: 'error',
    };
  }
};
