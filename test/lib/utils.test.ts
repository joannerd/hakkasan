import { delay } from 'lib/utils';

jest.useFakeTimers();

describe('delay(ms)', () => {
  test('does something after 2000ms', () => {
    const doSomething = jest.fn();
    delay(2000, doSomething);
    jest.advanceTimersByTime(2000);
    expect(doSomething).toHaveBeenCalled();
  });
});
