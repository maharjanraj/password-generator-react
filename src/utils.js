// Numbers 0-9
const numberCharSet = [48, 57];

// Uppercase letters A-Z
const uppercaseCharSet = [65, 90];

// Lowercase letters a-z
const lowercaseCharSet = [97, 122];

// Special characters !"#$%&'()*+,-./
const specialCharSet1 = [33, 47];

// Special characters [\]^_`
const specialCharSet2 = [91, 96];

// Special characters {|}~
const specialCharSet3 = [123, 126];

const generateRandomChar = (charSets) => {
  // pick random ascii range
  const charSet = charSets[Math.floor(Math.random() * charSets.length)];

  const charCode = Math.floor(Math.random() * (charSet[1] - charSet[0] +1)) + charSet[0];

  return String.fromCharCode(charCode);
};

export const generateRandomPassword = (
  length,
  includeNumber = false,
  includeUppercase = false,
  includeLowercase = false,
  includeSpecial = false
) => {
  const charSets = [];

  if (includeNumber) charSets.push(numberCharSet);
  if (includeUppercase) charSets.push(uppercaseCharSet);
  if (includeLowercase) charSets.push(lowercaseCharSet);
  if (includeSpecial) {
    charSets.push(specialCharSet1);
    charSets.push(specialCharSet2);
    charSets.push(specialCharSet3);
  }
  
  let password = '';

  for(let i = 0; i < length; i++) {
     password += generateRandomChar(charSets);
  }

  return password
};
