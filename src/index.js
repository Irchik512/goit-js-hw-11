import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import createMurkap from './template/create-murkap';
import fetchPhoto from './API-images';

const lightbox = new SimpleLightbox('.gallery a', {
  /* options */  refresh();
});

 const seachingFormRef = document.querySelector('.search-form');
 
 seachingFormRef.addEventListener('submit', onSeaching);

 function onSeaching (evt) {
   evt.preventDefault;
    
   fetchPhoto(evt.input.value)
   .then(data => { 
     return createMurkap(data);
   })
   .catch(Notify.failder("Sorry, there are no images matching your search query. Please try again."))


 }