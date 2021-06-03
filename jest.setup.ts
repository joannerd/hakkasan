/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom';

jest.mock('next/config', () => () => ({
  publicRuntimeConfig: {
    hakkasanApiUrl: '',
  },
}));
