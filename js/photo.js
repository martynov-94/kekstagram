import { getRandomInteger, getRandomArrayElement } from './util.js';
import { PhotoComment } from './photo-comment.js';

export class Photo {
  static curID = 1;

  constructor() {
    this.id = this.getID();
    this.url = this.getURL();
    this.description = this.getDescription();
    this.likes = this.getLikes();
    this.comments = this.getComments();

    curID++;
  }

  getID() {
    return curID;
  }

  getURL() {
    return `photos/${this.id}.jpg`;
  }

  getDescription() {
    return getRandomArrayElement(PHOTOS_DESCRIPTIONS);
  }

  getLikes() {
    return getRandomInteger(15, 300);
  }

  getComments() {
    const numberOfComments = getRandomInteger(0, 30);
    return Array.from({ length: numberOfComments }, createComment);
  }
};
