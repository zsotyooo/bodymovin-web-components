import { propHelper } from './prop';

describe('strToBool', () => {
  it('returns boolean for boolean', () => {
    expect(propHelper.strToBool(true)).toBe(true);
    expect(propHelper.strToBool(false)).toBe(false);
  });

  it('returns true for "true"', () => {
    expect(propHelper.strToBool('true')).toBe(true);
  });

  it('returns false for "anything else"', () => {
    expect(propHelper.strToBool('anything else')).toBe(false);
  });
});

describe('strToObj', () => {
  it('returns false for false', () => {
    expect(propHelper.strToObj(false)).toBe(false);
  });

  it('returns object for object', () => {
    const o = { a: 1 };
    expect(propHelper.strToObj(o)).toBe(o);
  });

  it('returns object for "{ object }"', () => {
    const o = '{ "a": 1 }';
    expect(propHelper.strToObj(o)).toEqual({ a: 1 });
  });
});
