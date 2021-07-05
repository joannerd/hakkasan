import { delay } from 'lib/utils';

jest.useFakeTimers();

describe('delay(ms)', () => {
  test('calls code after the given ms', async () => {
    const doSomething = jest.fn();
    delay(2000).then(doSomething);
    jest.advanceTimersByTime(2000);
    await Promise.resolve();
    expect(doSomething).toHaveBeenCalled();
  });

  test('does not call code before the given ms', async () => {
    const doSomething = jest.fn();
    delay(2000).then(doSomething);
    jest.advanceTimersByTime(1000);
    await Promise.resolve();
    expect(doSomething).not.toHaveBeenCalled();
  });
});
