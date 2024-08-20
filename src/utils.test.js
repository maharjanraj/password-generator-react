import { generateRandomPassword } from "./utils";

describe('Utils', () => {
  test('generateRandomPassword length', () => {
    expect(generateRandomPassword(10, true, false, true, false).length).toBe(10);
  });
});