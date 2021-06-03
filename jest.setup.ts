/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom';

const unmockedFetch = global.fetch;

jest.mock('next/config', () => () => ({
  publicRuntimeConfig: {
    hakkasanApiUrl: '',
  },
}));

beforeAll(() => {
  global.fetch = () =>
    Promise.resolve({
      ok: true,
      status: 200,
      redirected: false,
      statusText: undefined,
      headers: undefined,
      trailer: undefined,
      type: undefined,
      url: undefined,
      clone: undefined,
      body: undefined,
      bodyUsed: undefined,
      arrayBuffer: undefined,
      blob: undefined,
      formData: undefined,
      text: () => Promise.resolve(''),
      json: () => Promise.resolve({}),
    });
});

afterAll(() => {
  global.fetch = unmockedFetch;
});
