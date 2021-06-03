import {
  parseHakkasanData,
  fetchHakkasanByRef,
  VALID_HAKKSAN_REFS,
} from 'lib/hakkasan';
import events from 'data/events.json';

describe('parseHakkasanData(text)', () => {
  it('should parse the argument of retrieveJSONP from Hakkasan JSON data', () => {
    const data = { message: 'Test data' };
    const dataText = JSON.stringify(data);
    const text = `retrieveJSONP(${dataText})`;
    const result = parseHakkasanData(text);
    expect(result).toEqual(data);
  });
});

describe('fetchHakkasanByRef(ref)', () => {
  it('should not fetch Hakkasan data with an invalid ref', async () => {
    const ref = 'Invalid ref';
    const result = await fetchHakkasanByRef(ref);
    expect(result.dataType).toEqual('error');
  });

  it('should fetch Hakkasan data with a valid ref', async () => {
    const fetchResponseData = `retrieveJSONP(${JSON.stringify(events)})`;
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
        text: () => Promise.resolve(fetchResponseData),
        json: () => Promise.resolve(JSON.parse(fetchResponseData)),
      });

    const ref = VALID_HAKKSAN_REFS.events;
    const result = await fetchHakkasanByRef(ref);
    expect(result.ref).toEqual(`${ref}.json`);
  });
});
