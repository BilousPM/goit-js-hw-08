// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createImgCardMarcup(galleryItems);

galleryContainer.innerHTML = galleryMarkup;

function createImgCardMarcup(array) {
    return array.map(({original, preview, description}) => {
      return`
      <a class="gallery__item" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
          />
      </a>
       `;
    })
        .join("")
};

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

