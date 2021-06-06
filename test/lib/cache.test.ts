import { Cache } from 'lib/cache';

describe('Cache', () => {
  const key = 'Test';
  const value = 'Test value';
  const values = [
    { key, value },
    { key: 'Test 2', value: 'Test value 2' },
    { key: 'Test 3', value: 'Test value 3' },
  ];
  let testCache: Cache;

  beforeEach(() => {
    testCache = new Cache();
  });

  test('should be empty upon initialization', () => {
    expect(testCache.length).toBe(0);
    expect(testCache.cache).not.toBeUndefined();
    expect(testCache.cache).toBeInstanceOf(Map);
    expect(testCache.cache.entries.length).toBe(0);
  });

  test('should be able to set a value and increment the cache length', () => {
    values.forEach(({ key: k, value: v }, i) => {
      const length = testCache.set(k, v);
      expect(testCache.getValue(k)).toEqual(v);
      expect(length).toBe(i + 1);
      expect(testCache.length).toBe(length);
    });
  });

  test('should be able to set and get values', () => {
    values.forEach(({ key: k, value: v }) => {
      testCache.set(k, v);
      expect(testCache.getValue(k)).toEqual(v);
    });
  });

  test('should return null when getting a value that does not exist', () => {
    values.forEach(({ key: k }) => {
      const result = testCache.getValue(k);
      expect(result).toBeNull();
    });
  });

  test("should update a value's updatedAt property after each get of the value", () => {
    values.forEach(({ key: k, value: v }) => {
      jest
        .spyOn(global.Date, 'now')
        .mockImplementationOnce(() => 1)
        .mockImplementationOnce(() => 2);

      testCache.set(k, v);
      const { value: initialValue, updatedAt: createdAt } =
        testCache.cache.get(k);

      const getValueResult = testCache.getValue(k);
      const { updatedAt } = testCache.cache.get(k);
      expect(createdAt).toBeLessThan(updatedAt);
      expect(initialValue).toEqual(getValueResult);
    });
  });

  test('should remove a least used key when the length exceeds the maxLength', () => {
    const maxLength = 2;
    const cacheWithMaxLengthTwo = new Cache(maxLength);

    const lengthsBySetOrder = {};
    values.forEach(({ key: k, value: v }, i) => {
      const length = cacheWithMaxLengthTwo.set(k, v);
      lengthsBySetOrder[i + 1] = length;
    });

    Object.entries(lengthsBySetOrder).forEach((lengthData) => {
      const [order, length] = lengthData;
      const numericalOrder = parseInt(order, 10);

      if (numericalOrder < maxLength) {
        expect(length).toBe(numericalOrder);
      } else {
        expect(length).toBe(maxLength);
      }
    });

    expect(cacheWithMaxLengthTwo.getValue(key)).toBeNull();
  });

  test('should be able to get multiple values by an array of keys', () => {
    const expected = {};
    const keys = values.map(({ key: k }) => k);

    values.forEach(({ key: k, value: v }) => {
      testCache.set(k, v);
      expected[k] = v;
    });

    expect(testCache.getValues(keys)).toEqual(expected);
  });

  test('should be easily cleared', () => {
    const expectedLength = 0;

    values.forEach(({ key: k, value: v }) => {
      const currentLength = testCache.set(k, v);
      expect(testCache.length).toBe(currentLength);
    });

    const length = testCache.clear();

    expect(length).toBe(expectedLength);
    expect(testCache.length).toBe(expectedLength);
    expect(testCache.cache.entries.length).toBe(expectedLength);
  });
});
