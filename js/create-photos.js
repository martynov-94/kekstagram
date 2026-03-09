import { getRandomInteger, getRandomArrayElement } from './util.js';
import { COMMENTS_SENTENCES, NAMES, PHOTOS_DESCRIPTIONS } from './data.js';
import { Photo } from './photo.js';

let curCommentID = 1;



function createComment() {
  // const comment = {
  //   id: getCommentID(),
  //   avatar: getCommentAvatar(),
  //   message: getCommentMessage(),
  //   name: getCommentName()
  // };

  // curCommentID++;

  // return comment;

  return "";
}

function getCommentAvatar() {
  return `img/avatar-${getRandomInteger(1, 6)}.svg`;
}

function getCommentMessage() {
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

function getRandomSentence() {
  return getRandomArrayElement(COMMENTS_SENTENCES);
}

function getCommentName() {
  return getRandomArrayElement(NAMES);
}

function createPhotos(numberOfPhotos) {
  return Array.from({ length: numberOfPhotos }, createPhoto);
}

function createPhoto() {
  return new Photo();
}

export { createPhotos };
