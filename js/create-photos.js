import { Photo } from './photo.js';

function createPhotos(numberOfPhotos) {
  return Array.from({ length: numberOfPhotos }, () => new Photo());
}

export { createPhotos };
