import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryListEl = document.querySelector(".gallery");

const galleryMarkup = galleryItems.map(
  ({ preview, original, description }) => `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}"
      alt="${description}" />
   </a>
</li>`
).join('');

galleryListEl.innerHTML = galleryMarkup;

galleryListEl.addEventListener('click', onImageClick);

function onImageClick(event) {
    event.preventDefault();

    if (!event.target.classList.contains("gallery__image")) {
        return;
    }

    const gallery = new SimpleLightbox(".gallery a", {
        captionsData: "alt",
        captionPosition: "bottom",
        captionDelay: 250,

    });
}
