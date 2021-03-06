interface CacheValue<T> {
  value: T;
  updatedAt: number;
}

class Cache<T = string> {
  cache: Map<string, CacheValue<T>>;

  maxLength: number;

  length: number;

  constructor(maxLength?: number) {
    this.cache = new Map();
    this.maxLength = maxLength || 1000;
    this.length = 0;
  }

  has(key: string): boolean {
    return this.cache.has(key);
  }

  set(key: string, value: T): number {
    if (this.length >= this.maxLength) {
      const leastUsedKey = this.leastRecentlyUsed();
      this.delete(leastUsedKey);
    }

    if (!this.has(key)) this.length += 1;
    this.cache.set(key, {
      value,
      updatedAt: Date.now(),
    });

    return this.length;
  }

  getValue(key: string): T {
    const cacheValue = this.cache.get(key);
    if (!cacheValue) {
      return null;
    }

    const { value } = cacheValue;
    this.set(key, value);
    return value;
  }

  delete(key: string): number {
    this.length -= 1;
    this.cache.delete(key);
    return this.length;
  }

  clear(): number {
    this.length = 0;
    this.cache.clear();
    return this.length;
  }

  leastRecentlyUsed(): string {
    const leastUsedKey = Array.from(this.cache.keys()).sort(
      (a, b) => this.cache.get(a).updatedAt - this.cache.get(b).updatedAt
    )[0];
    return leastUsedKey;
  }

  getValues(keys: string[]): { [key: string]: T } {
    const cacheValue = {};
    keys.forEach((key) => {
      cacheValue[key] = this.getValue(key);
    });
    return cacheValue;
  }
}

export default Cache;
