import { getRandomInteger, getRandomArrayElement } from './util.js';
import { COMMENTS_SENTENCES, NAMES } from './data.js';

export class PhotoComment {
  static curID = 1;

  constructor() {
    this.id = this.getID();
    this.avatar = this.getAvatar();
    this.message = this.getMessage();
    this.name = this.getName();

    PhotoComment.curID++;
  }

  getID() {
    return PhotoComment.curID;
  }

  getAvatar() {
    return `img/avatar-${getRandomInteger(1, 6)}.svg`;
  }

  getMessage() {
    const commentSentences = [];
    const numberOfSentences = Math.min(getRandomInteger(1, 2), COMMENTS_SENTENCES.length);
    const usedSentences = new Set();

    while (commentSentences.length < numberOfSentences) {
      const sentence = getRandomSentence();
      if (usedSentences.has(sentence)) {
        continue;
      }

      usedSentences.add(sentence);
      commentSentences.push(sentence);
    }

    return commentSentences.join` `;
  }

  getName() {
    return getRandomArrayElement(NAMES);
  }
}

function getRandomSentence() {
  return getRandomArrayElement(COMMENTS_SENTENCES);
}
