import { generateMockFetch } from 'test/testUtils';
import {
  parseHakkasanData,
  fetchHakkasanByRef,
  VALID_HAKKSAN_REFS,
} from 'lib/hakkasan';
import events from 'data/events.json';

describe('parseHakkasanData(text)', () => {
  test('should parse the argument of retrieveJSONP from Hakkasan JSON data', () => {
    const data = { message: 'Test data' };
    const dataText = JSON.stringify(data);
    const text = `retrieveJSONP(${dataText})`;
    const result = parseHakkasanData(text);
    expect(result).toEqual(data);
  });

  test('should catch and rethrow errors', () => {
    expect(parseHakkasanData).toThrowError();
  });
});

describe('fetchHakkasanByRef(ref)', () => {
  test('should not fetch Hakkasan data with an invalid ref', async () => {
    const ref = 'Invalid ref';
    const result = await fetchHakkasanByRef(ref);
    expect(result.dataType).toEqual('error');
  });

  test('should fetch Hakkasan data with a valid ref', async () => {
    const fetchResponseData = `retrieveJSONP(${JSON.stringify(events)})`;
    global.fetch = generateMockFetch({
      text: () => Promise.resolve(fetchResponseData),
      json: () => Promise.resolve(JSON.parse(fetchResponseData)),
    });

    const ref = VALID_HAKKSAN_REFS.events;
    const result = await fetchHakkasanByRef(ref);
    expect(result.ref).toEqual(`${ref}.json`);
  });
});
