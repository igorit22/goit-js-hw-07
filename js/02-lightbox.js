import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");

// Функція для створення HTML-розмітки карточки зображення галереї

const createGalleryItem = ({ preview, original, description }) =>
  `<li class="gallery__item">
     <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
     </a>
   </li>`;

// Генеруємо HTML-розмітку для кожного елемента масиву галереї та вставляємо її в контейнер галереї

const galleryMarkup = galleryItems.map(createGalleryItem).join("");

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

// Ініціалізація бібліотеки SimpleLightbox для елементів з посиланнями на зображення

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
