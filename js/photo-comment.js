import { getRandomInteger, getRandomArrayElement } from './util.js';

export class PhotoComment {
  static curID = 1;

  constructor() {
    this.id = this.getID();
    this.url = this.getURL();
    this.description = this.getDescription();
    this.likes = this.getLikes();
    this.comments = this.getComments();

    curID++;
  }

  id: getCommentID(),
  //   avatar: getCommentAvatar(),
  //   message: getCommentMessage(),
  //   name: getCommentName()
  // };

  // curCommentID++;
}
