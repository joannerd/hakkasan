import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

interface Response<T> {
  data: T[];
  ref: string;
  dataType: string;
}

export enum HakkasanRefType {
  events = 'events.json',
}

export const fetchHakkasanByRef = async <T>(ref: HakkasanRefType): Promise<Response<T>> => {
  try {
    const res = await fetch(`${publicRuntimeConfig.hakkasanApiUrl}/${ref}`);
    const text = await res.text();
    const dataText = text.split('retrieveJSONP(')[1];
    const dataString = dataText.slice(0, dataText.length - 2);
    const data = await JSON.parse(dataString);
    return data;
  } catch (err) {
    console.warn(err);
    return {
      data: [],
      ref: 'error',
      dataType: 'error',
    };
  }
};
