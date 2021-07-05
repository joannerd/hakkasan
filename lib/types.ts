/* eslint-disable camelcase */

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
  headlinerName?: string;
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

export interface HakkasanFetchResponse<T> {
  data: Array<T>;
  ref: string;
  dataType: string;
}

export interface HakkasanResponse {
  artists: HakkasanFetchResponse<Artist>;
  events: HakkasanFetchResponse<Event>;
  venues: HakkasanFetchResponse<Venue>;
}

export type HakkasanByRefResponse =
  | HakkasanFetchResponse<Artist>
  | HakkasanFetchResponse<Event>
  | HakkasanFetchResponse<Venue>;

export type HakkasanRef = 'artists' | 'events' | 'venues';

export interface Month<T> {
  [month: string]: T[][];
}

export interface CalendarEvents<T> {
  [year: string]: Month<T>;
}

export interface GenericEvent {
  date: string;
  text: string;
  color: string;
}

export interface Filter {
  id: number;
  name: string;
  color: string;
}
