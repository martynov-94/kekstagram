function getRandomInteger(start, end) {
  return Math.floor(Math.random() * (end - start + 1)) + start;
}

function getRandomArrayElement(arr) {
  return arr[getRandomInteger(0, arr.length - 1)];
}

export {getRandomInteger, getRandomArrayElement};
