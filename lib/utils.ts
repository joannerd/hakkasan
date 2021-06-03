/* eslint-disable import/prefer-default-export */

export const delay = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));
