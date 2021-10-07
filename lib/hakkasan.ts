/* eslint-disable no-shadow, camelcase */
import getConfig from 'next/config';
import fetch from 'node-fetch';
import type {
  Artist,
  Event,
  Venue,
  HakkasanRef,
  HakkasanFetchResponse,
} from 'lib/types';

const { publicRuntimeConfig } = getConfig();

export const parseHakkasanData = <T = Artist | Event | Venue>(
  text: string
): HakkasanFetchResponse<T> => {
  const dataString = text.split('retrieveJSONP(')[1];
  const trimmedDataString = dataString.slice(0, dataString.length - 2);
  const data = JSON.parse(trimmedDataString);
  return data;
};

export const fetchHakkasanByRef = async <T = Artist | Event | Venue>(
  ref: HakkasanRef
): Promise<HakkasanFetchResponse<T>> => {
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
