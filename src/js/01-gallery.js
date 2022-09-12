import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const makeGalleryItemsMarkup = (galleryitems) =>
    galleryitems.map(({ preview, original, description }) =>
    `<div><a class="gallery__item" href="${original}">
     <img class ="gallery__image"
          src = "${preview}"    
          alt = "${description}" 
          "/>
          </a>
    </div>`).join("");

const galleryContainer = document.querySelector(".gallery");
const itemsMarkup = makeGalleryItemsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', itemsMarkup);

      
 new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
}); 



 




