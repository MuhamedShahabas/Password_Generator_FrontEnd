export const generatePassword = ({
  length,
  lowercase,
  uppercase,
  numbers,
  symbols,
}) => {
  let password = "";
  let chars = "";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbersChars = "0123456789";
  const symbolsChars = "!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

  chars += lowercase ? lowercaseChars : "";
  chars += uppercase ? uppercaseChars : "";
  chars += numbers ? numbersChars : "";
  chars += symbols ? symbolsChars : "";

  for (let i = 0; i < length; i++) {
    let random = Math.floor(Math.random() * chars.length);
    password += chars.substring(random, random + 1);
  }

  return password;
};
