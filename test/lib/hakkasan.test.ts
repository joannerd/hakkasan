import { generateMockFetch } from 'test/testUtils';
import { parseHakkasanData, fetchHakkasanByRef } from 'lib/hakkasan';
import events from 'data/events.json';

describe('parseHakkasanData(text)', () => {
  test('should parse the argument of retrieveJSONP from Hakkasan JSON data', () => {
    const data = { message: 'Test data' };
    const dataText = JSON.stringify(data);
    const text = `retrieveJSONP(${dataText})`;
    const result = parseHakkasanData(text);
    expect(result).toEqual(data);
  });

  test('should throw a TypeError for string inputs without an retrieveJSONP() invocation', () => {
    expect(() => parseHakkasanData('')).toThrow(TypeError);
  });
});

describe('fetchHakkasanByRef(ref)', () => {
  test('should fetch Hakkasan data with a valid ref', async () => {
    const fetchResponseData = `retrieveJSONP(${JSON.stringify(events)})`;
    global.fetch = generateMockFetch({
      text: () => Promise.resolve(fetchResponseData),
      json: () => Promise.resolve(JSON.parse(fetchResponseData)),
    });

    const ref = 'events';
    const result = await fetchHakkasanByRef(ref);
    expect(result.ref).toEqual(`${ref}.json`);
  });
});
