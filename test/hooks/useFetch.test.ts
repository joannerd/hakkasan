import { renderHook } from '@testing-library/react-hooks';
import { useFetch } from 'hooks';
// import artists from 'data/artists.json';
// import events from 'data/events.json';
// import venues from 'data/venues.json';
import type { HakkasanResponse } from 'lib/hakkasan';

describe('useFetch(endpoint)', () => {
  test('should fetch data from the Next.js proxy API', () => {
    const endpoint = '/api/hakkasan?ref=events';
    // const expected = {
    //   artists,
    //   events,
    //   venues,
    // };

    const { result } = renderHook(() => useFetch<HakkasanResponse>(endpoint));

    expect(result.current.isLoading).toBe(false);
    // expect(result.current.data).toEqual(expected);
  });
});
