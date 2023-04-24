import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');

const createGalleryItem = ({ preview, original, description }) =>
  `<li class="gallery__item">
     <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
     </a>
   </li>`;

const galleryMarkup = galleryItems.map(createGalleryItem).join('');

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

// initialize SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
