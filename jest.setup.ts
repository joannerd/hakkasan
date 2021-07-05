/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom';
import { generateMockFetch } from 'test/testUtils';

const unmockedFetch = global.fetch;

jest.mock('next/config', () => () => ({
  publicRuntimeConfig: {
    hakkasanApiUrl: '',
  },
}));

beforeAll(() => {
  global.fetch = generateMockFetch();
});

afterAll(() => {
  global.fetch = unmockedFetch;
});
