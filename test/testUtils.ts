/* eslint-disable import/prefer-default-export */

type MockFetchOptions = Partial<Response>;

export const generateMockFetch =
  (options?: MockFetchOptions) => (): Promise<Response> =>
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
      json: () => Promise.resolve(),
      ...options,
    });
