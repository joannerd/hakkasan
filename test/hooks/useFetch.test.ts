import { renderHook, act } from '@testing-library/react-hooks';
import { useFetch } from 'hooks';
import artists from 'data/artists.json';
import events from 'data/events.json';
import venues from 'data/venues.json';
import type { HakkasanResponse } from 'lib/hakkasan';

describe('useFetch(endpoint)', () => {
  test('should fetch data from the Next.js proxy API', async () => {
    const endpoint = '/api/hakkasan?ref=events';
    const expected = {
      artists,
      events,
      venues,
    };
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
        json: () => Promise.resolve(expected),
      });

    const { result } = renderHook(() => useFetch<HakkasanResponse>(endpoint));

    await act(async () => {
      await result.current.fetchData();
    });

    expect(result.current.data).toEqual(expected);
  });
});
