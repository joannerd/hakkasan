/* eslint-disable import/prefer-default-export */

export const delay = (ms: number, cb: () => void): Promise<void> =>
  new Promise((resolve) =>
    setTimeout(() => {
      cb();
      resolve();
    }, ms)
  );
