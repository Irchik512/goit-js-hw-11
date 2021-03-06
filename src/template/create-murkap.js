import { Notify } from "notiflix";


export default function createMurkap(photos) {
  const galleryRef = document.querySelector('.gallery')
  const murkup = photos
    .map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => 
    `<a class="photo__link" href="${largeImageURL}">
    <div class="photo-card">
    <div class="img-wraper">
    <img src="${webformatURL}" alt="${tags}" loading="lazy" />
    </div>
    <div class="info">
        <p class="info-item">
          <b>Likes</b> ${likes}
        </p>
        <p class="info-item">
          <b>Views</b> ${views}
        </p>
        <p class="info-item">
          <b>Comments</b> ${comments}
        </p>
        <p class="info-item">
          <b>Downloads</b> ${downloads}
        </p>
      </div>
    </div>
    </a>`).join("");

  galleryRef.insertAdjacentHTML('beforeend', murkup);


}



