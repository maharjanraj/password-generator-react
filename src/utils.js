/**
 * Character sets represented by their ASCII ranges.
 * @typedef {Object} CharSets
 * @property {number[]} numbers - ASCII range for numbers (0-9).
 * @property {number[]} uppercase - ASCII range for uppercase letters (A-Z).
 * @property {number[]} lowercase - ASCII range for lowercase letters (a-z).
 * @property {number[]} symbols - ASCII range for symbols characters (!"#$%&'()*+,-./).
 */

/** @type {CharSets} */
const charSets = {
  numbers: [48, 57], // 0-9
  uppercase: [65, 90], // A-Z
  lowercase: [97, 122], // a-z
  symbols: [33, 47], // !"#$%&'()*+,-./
};

/**
 * Generates a random character from the given ASCII range.
 *
 * @param {number[]} range - Array containing the minimum and maximum ASCII values.
 * @returns {string} Randomly generated character from the specified range.
 */
const getRandomChar = ([min, max]) =>
  String.fromCharCode(Math.floor(Math.random() * (max - min + 1)) + min);

/**
 * Generates a random password based on the provided options.
 *
 * @param {number} length - The desired length of the password.
 * @param {Object} options - An object containing options for the password generation.
 * @param {boolean} [options.includeNumbers=false] - Whether to include at least one number (0-9).
 * @param {boolean} [options.includeUppercase=false] - Whether to include at least one uppercase letter (A-Z).
 * @param {boolean} [options.includeLowercase=false] - Whether to include at least one lowercase letter (a-z).
 * @param {boolean} [options.includeSymbols=false] - Whether to include at least one symbol character (!"#$%&'()*+,-./).
 * @returns {string} Randomly generated password that includes the specified character types.
 *
 * @example
 * // Generate a 12-character password with numbers, uppercase, and symbol characters
 * const password = generateRandomPassword(12, {
 *   includeNumbers: true,
 *   includeUppercase: true,
 *   includeLowercase: false,
 *   includeSymbols: true
 * });
 * console.log(password); // Output might be: 'A5!B2C1!D3E'
 */
export const generateRandomPassword = (
  length,
  {
    includeNumbers = false,
    includeUppercase = false,
    includeLowercase = false,
    includeSymbols = false,
  }
) => {
  const selectedSets = [];
  const passwordChars = [];

  // Ensure at least one character from each selected set
  if (includeNumbers) {
    selectedSets.push(charSets.numbers);
    passwordChars.push(getRandomChar(charSets.numbers));
  }
  if (includeUppercase) {
    selectedSets.push(charSets.uppercase);
    passwordChars.push(getRandomChar(charSets.uppercase));
  }
  if (includeLowercase) {
    selectedSets.push(charSets.lowercase);
    passwordChars.push(getRandomChar(charSets.lowercase));
  }
  if (includeSymbols) {
    selectedSets.push(charSets.symbols);
    passwordChars.push(getRandomChar(charSets.symbols));
  }

  // Generate remaining characters randomly
  while (passwordChars.length < length) {
    const randomSet =
      selectedSets[Math.floor(Math.random() * selectedSets.length)];
    passwordChars.push(getRandomChar(randomSet));
  }

  // Shuffle the characters to avoid predictable patterns
  for (let i = passwordChars.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [passwordChars[i], passwordChars[j]] = [passwordChars[j], passwordChars[i]];
  }

  return passwordChars.join('');
};

/**
 *
 * @param {string} type The type of checkbox (e.g., 'lowercase', 'uppercase', 'numbers', 'symbols')
 * @param {Object} options - An object containing the state of other checkboxes.
 * @param {boolean} options.includeUppercase - Whether the uppercase letters checkbox is checked.
 * @param {boolean} options.includeLowercase - Whether the lowercase letters checkbox is checked.
 * @param {boolean} options.includeNumbers - Whether the numbers checkbox is checked.
 * @param {boolean} options.includeSymbols - Whether the symbols checkbox is checked.
 * @returns {boolean} Returns true if the specified type can be unchecked, false if it should remain checked.
 * @example
 * // Check if the 'lowercase' checkbox can be unchecked when other checkboxes are selected
 * const canUncheckLowercase = canBeUnchecked('lowercase', {
 *   includeUppercase: true,
 *   includeLowercase: false,
 *   includeNumbers: true,
 *   includeSymbols: false
 * });
 * console.log(canUncheckLowercase); // Output: true
 */
export const canBeUnchecked = (
  type,
  { includeUppercase, includeLowercase, includeNumbers, includeSymbols }
) => {
  switch (type) {
    case 'includeLowercase':
      return includeUppercase || includeNumbers || includeSymbols;

    case 'includeUppercase':
      return includeLowercase || includeNumbers || includeSymbols;

    case 'includeNumbers':
      return includeUppercase || includeLowercase || includeSymbols;

    case 'includeSymbols':
      return includeUppercase || includeLowercase || includeNumbers;

    default:
      return true;
  }
};
