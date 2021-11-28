// import './styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import createMurkap from './template/create-murkap';
import fetchPhoto from './API-images';

// const lightbox = new SimpleLightbox('.gallery a', {
//   /* options */  lightbox.refresh();
// });

 const refs ={
  seachingForm: document.querySelector('.search-form'),
  gallery: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('.more-photo')
} 
let searchQuery 
let page = 1;
const per_page = 40;
let lightbox = {}
refs.loadMoreBtn.classList.add('is-hidden');

refs.seachingForm.addEventListener('submit', onSeaching);
refs.gallery.addEventListener('click', openBigImage);
refs.loadMoreBtn.addEventListener('click', onLoadMore)


async function onSeaching (evt) {
  evt.preventDefault();
  searchQuery = evt.currentTarget.elements.searchQuery.value.trim();
  page = 1;
  refs.loadMoreBtn.classList.add('is-hidden');
  refs.gallery.innerHTML = '';
  

  try {
    const data = await fetchPhoto(searchQuery, page);
    if(data.hits.length === 0) {
      return Notify.info('Sorry, there are no images matching your search query. Please try again.')
    } else{
      Notify.success(`Hooray! We found ${data.totalHits} images`)
      createMurkap(data.hits)
      lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
      if (page < data.totalHits/per_page) {
        refs.loadMoreBtn.classList.remove('is-hidden')
      } else { refs.loadMoreBtn.classList.add('is-hidden')}
      page +=1
    }
  } catch (error) {
    return Notify.failure(error.message)
  }
  refs.seachingForm.reset();
}  

async function onLoadMore(evt) {
  try {
    const data = await fetchPhoto(searchQuery);
    
    if (page < data.totalHits/per_page) {
      refs.loadMoreBtn.classList.remove('is-hidden')
    } else {
      refs.loadMoreBtn.classList.add('is-hidden')
      Notify.info("We're sorry, but you've reached the end of search results.", { timeout: 4000 })
    }
    createMurkap(data.hits);
    lightbox.refresh();
    page +=1
  } catch (error) {
    return Notify.failure(error.message)
  }
}

function openBigImage(event) {
  event.preventDefault();
}  
  