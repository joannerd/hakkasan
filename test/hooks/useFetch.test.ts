import { renderHook, act } from '@testing-library/react-hooks';
import { generateMockFetch } from 'test/testUtils';
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

    global.fetch = generateMockFetch({
      json: () => Promise.resolve(expected),
    });

    const { result } = renderHook(() => useFetch<HakkasanResponse>(endpoint));

    await act(result.current.fetchData);

    expect(result.current.data).toEqual(expected);
  });

  test('should set errors', async () => {
    const endpoint = '/api/hakkasan?ref=events';
    const expectedError = 'response.json is not a function';

    global.fetch = generateMockFetch({
      json: () => Promise.reject(new Error(expectedError)),
    });

    const { result } = renderHook(() => useFetch<HakkasanResponse>(endpoint));

    await act(result.current.fetchData);

    expect(result.current.error).toEqual(expectedError);
  });
});
