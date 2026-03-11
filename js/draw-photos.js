import { createPhotos } from "./create-photos";

const picturesContainer = document.querySelector(".pictures");
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

function drawPhotos(numberOfPhotos) {
  const photos = createPhotos(numberOfPhotos);
  photos.forEach(drawPhoto);
}

function drawPhoto(photo) {
  const pictureElement = pictureTemplate.cloneNode(true);

  const pictureImg = pictureElement.querySelector("picture__img");
  pictureImg.src = photo.url;
  pictureImg.alt = picture.description;

  picturesContainer.append(picture);
}

export { drawPhotos };
