import fetch from 'node-fetch';
import { generateMockFetch } from 'test/testUtils';
import { parseHakkasanData, fetchHakkasanByRef } from 'lib/hakkasan';
import events from 'data/events.json';

jest.mock('node-fetch', () => jest.fn());

describe('parseHakkasanData(text)', () => {
  test('should parse the argument of retrieveJSONP from Hakkasan JSON data', () => {
    const data = { message: 'Test data' };
    const dataText = JSON.stringify(data);
    const text = `retrieveJSONP(${dataText}) `;
    const result = parseHakkasanData(text);
    expect(result).toEqual(data);
  });

  test('should throw a TypeError for string inputs without an retrieveJSONP() invocation', () => {
    expect(() => parseHakkasanData('')).toThrow(TypeError);
  });
});

describe('fetchHakkasanByRef(ref)', () => {
  test('should fetch Hakkasan data with a valid ref', async () => {
    const fetchResponseData = `retrieveJSONP(${JSON.stringify(events)}) `;

    fetch.mockImplementation(
      generateMockFetch({
        text: () => Promise.resolve(fetchResponseData),
        json: () => Promise.resolve(JSON.parse(fetchResponseData)),
      })
    );

    const ref = 'events';
    const result = await fetchHakkasanByRef(ref);
    expect(result.ref).toEqual(`${ref}.json`);
  });

  test('should catch errors thrown by invalid fetch() calls', async () => {
    const errorMessage = 'Test fetch() error';
    const expectedResponse = {
      data: [],
      ref: errorMessage,
      dataType: 'error',
    };

    fetch.mockImplementation(() => Promise.reject(new Error(errorMessage)));

    const response = await fetchHakkasanByRef('events');
    expect(response).toEqual(expectedResponse);
  });

  test('should catch errors thrown by invalid res.text() invocations', async () => {
    const errorMessage = 'Test res.text() error';
    const expectedResponse = {
      data: [],
      ref: errorMessage,
      dataType: 'error',
    };

    fetch.mockImplementation(
      generateMockFetch({
        text: () => Promise.reject(new Error(errorMessage)),
      })
    );

    const response = await fetchHakkasanByRef('events');
    expect(response).toEqual(expectedResponse);
  });
});
