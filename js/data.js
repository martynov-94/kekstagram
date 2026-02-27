import {getRandomInteger, getRandomArrayElement} from './util.js';

const COMMENTS_SENTENCES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Антон',
  'Витя',
  'Илья',
  'Алена',
  'Аня',
  'Максим',
  'Джозеф',
  'Валерия'
];

const photosIDs = {
  min: 1,
  usedIDs: new Set()
};

const commentsIDs = {
  min: 1,
  max: 10000,
  usedIDs: new Set()
};


function generateID(data) {
  const randomID = getRandomInteger(data.min, data.max);

  if (data.usedIDs.has(randomID)) {
    return generateID(data);
  }

  data.usedIDs.add(randomID);
  return randomID;
}

function generatePhotoDescription() {
  return 'Красивое описание фотографии';
}

function getPhotoLikes() {
  return getRandomInteger(15, 300);
}

function getPhotoComments() {
  const numberOfComments = getRandomInteger(0, 30);
  return Array.from({ length: numberOfComments }, createComment);
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

function createComment() {
  return {
    id: generateID(commentsIDs),
    avatar: getCommentAvatar(),
    message: getCommentMessage(),
    name: getCommentName()
  };
}

function createPhoto() {
  const photo = {
    id: generateID(photosIDs),
    description: generatePhotoDescription(),
    likes: getPhotoLikes(),
    comments: getPhotoComments()
  };

  photo.url = `photos/${photo.id}.jpg`;

  return photo;
}

function createPhotos(n) {
  photosIDs.max = n;
  return Array.from({ length: n }, createPhoto);
}

export {createPhotos};
