/* eslint-disable no-shadow, camelcase */
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

interface Response<T> {
  data: Array<T>;
  ref: string;
  dataType: string;
}

export interface Artist {
  id: number;
  createdAt: string;
  dataType: string;
  friendly_id: string;
  name: string;
  updatedAt: string;
}

export interface Event {
  id: number;
  headliner: number;
  has_public_tickets: boolean;
  close: string;
  show_in_calendars: boolean;
  active: boolean;
  venue_id: number;
  venue_title: string;
  title: string;
  dayOfTheWeek: number;
  date: string;
  open: string;
  location: string;
  public_reservations: boolean;
  flyer_url: string;
  artist_event?: unknown[] | null;
  tag_list?: unknown[] | null;
  tickets_URL?: string | null;
}

interface VenueArea {
  id: number;
  title: string;
}

export interface Venue {
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

export interface HakkasanResponse {
  artists: Response<Artist>;
  events: Response<Event>;
  venues: Response<Venue>;
}

export type HakkasanByRefResponse =
  | Response<Artist>
  | Response<Event>
  | Response<Venue>;

export type HakkasanRef = 'artists' | 'events' | 'venues';

export const parseHakkasanData = <T = Artist | Event | Venue>(
  text: string
): Response<T> => {
  const dataString = text.split('retrieveJSONP(')[1];
  const trimmedDataString = dataString.slice(0, dataString.length - 1);
  const data = JSON.parse(trimmedDataString);
  return data;
};

export const fetchHakkasanByRef = async <T = Artist | Event | Venue>(
  ref: HakkasanRef
): Promise<Response<T>> => {
  try {
    const res = await fetch(
      `${publicRuntimeConfig.hakkasanApiUrl}/${ref}.json`
    );
    const text = await res.text();
    const data = parseHakkasanData<T>(text);
    return data;
  } catch (err) {
    return {
      data: [],
      ref: err.message,
      dataType: 'error',
    };
  }
};
