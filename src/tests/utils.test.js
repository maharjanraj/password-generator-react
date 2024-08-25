import { canBeUnchecked, generateRandomPassword } from '../utils';

describe('canBeUnchecked', () => {
  it('should return true if other options are selected when lowercase is unchecked', () => {
    const result = canBeUnchecked('includeLowercase', {
      includeUppercase: true,
      includeLowercase: false,
      includeNumbers: true,
      includeSymbols: false,
    });
    expect(result).toBe(true);
  });

  it('should return false if no other options are selected when lowercase is unchecked', () => {
    const result = canBeUnchecked('includeLowercase', {
      includeUppercase: false,
      includeLowercase: true,
      includeNumbers: false,
      includeSymbols: false,
    });
    expect(result).toBe(false);
  });

  it('should return true if other options are selected when uppercase is unchecked', () => {
    const result = canBeUnchecked('includeUppercase', {
      includeUppercase: false,
      includeLowercase: true,
      includeNumbers: false,
      includeSymbols: true,
    });
    expect(result).toBe(true);
  });

  it('should return false if no other options are selected when uppercase is unchecked', () => {
    const result = canBeUnchecked('includeUppercase', {
      includeUppercase: true,
      includeLowercase: false,
      includeNumbers: false,
      includeSymbols: false,
    });
    expect(result).toBe(false);
  });

  // Similar tests for numbers and symbols
  it('should return true if other options are selected when numbers are unchecked', () => {
    const result = canBeUnchecked('includeNumbers', {
      includeUppercase: true,
      includeLowercase: false,
      includeNumbers: false,
      includeSymbols: true,
    });
    expect(result).toBe(true);
  });

  it('should return false if no other options are selected when numbers are unchecked', () => {
    const result = canBeUnchecked('includeNumbers', {
      includeUppercase: false,
      includeLowercase: false,
      includeNumbers: true,
      includeSymbols: false,
    });
    expect(result).toBe(false);
  });

  it('should return true if other options are selected when symbols are unchecked', () => {
    const result = canBeUnchecked('includeSymbols', {
      includeUppercase: true,
      includeLowercase: true,
      includeNumbers: false,
      includeSymbols: false,
    });
    expect(result).toBe(true);
  });

  it('should return false if no other options are selected when symbols are unchecked', () => {
    const result = canBeUnchecked('includeSymbols', {
      includeUppercase: false,
      includeLowercase: false,
      includeNumbers: false,
      includeSymbols: true,
    });
    expect(result).toBe(false);
  });
});

describe('generateRandomPassword', () => {
  it('should generate a password of the correct length', () => {
    const length = 12;
    const password = generateRandomPassword(length, {
      includeNumbers: true,
      includeUppercase: true,
      includeLowercase: true,
      includeSymbols: true,
    });
    expect(password.length).toBe(length);
  });

  it('should include at least one lowercase letter when includeLowercase is true', () => {
    const password = generateRandomPassword(12, {
      includeNumbers: false,
      includeUppercase: false,
      includeLowercase: true,
      includeSymbols: false,
    });
    expect(/[a-z]/.test(password)).toBe(true);
  });

  it('should include at least one uppercase letter when includeUppercase is true', () => {
    const password = generateRandomPassword(12, {
      includeNumbers: false,
      includeUppercase: true,
      includeLowercase: false,
      includeSymbols: false,
    });
    expect(/[A-Z]/.test(password)).toBe(true);
  });

  it('should include at least one number when includeNumbers is true', () => {
    const password = generateRandomPassword(12, {
      includeNumbers: true,
      includeUppercase: false,
      includeLowercase: false,
      includeSymbols: false,
    });
    expect(/[0-9]/.test(password)).toBe(true);
  });

  it('should include at least one special character when includeSymbols is true', () => {
    const password = generateRandomPassword(12, {
      includeNumbers: false,
      includeUppercase: false,
      includeLowercase: false,
      includeSymbols: true,
    });
    expect(/[!"#$%&'()*+,-./]/.test(password)).toBe(true);
  });

  it('should not include numbers when includeNumbers is false', () => {
    const password = generateRandomPassword(12, {
      includeNumbers: false,
      includeUppercase: true,
      includeLowercase: true,
      includeSymbols: true,
    });
    expect(/[0-9]/.test(password)).toBe(false);
  });

  it('should not include special characters when includeSymbols is false', () => {
    const password = generateRandomPassword(12, {
      includeNumbers: true,
      includeUppercase: true,
      includeLowercase: true,
      includeSymbols: false,
    });
    expect(/[!"#$%&'()*+,-./]/.test(password)).toBe(false);
  });
});
