function isShorterThanLength(str, length) {
  return str.length <= length;
}

function isPalindrome(str) {
  str = str.replaceAll(' ', '').toLowerCase();
  return str === [...str].reverse().join``;
}

function extractNumber(str) {
  const digits = `${str}`.replace(/[^\d]/g, '');
  return digits.length ? +digits : NaN;
}
