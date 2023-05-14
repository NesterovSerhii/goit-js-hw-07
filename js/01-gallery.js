import { galleryItems } from './gallery-items.js';
// Change code below this line
const list = document.querySelector('.gallery');

const galleryElements = [];

galleryItems.forEach(galleryItem => {
    
    const item = document.createElement('li');
    item.classList.add('gallery__item');
    
    
    const link = document.createElement('a');
    link.classList.add('gallery__link');
    link.href = galleryItem.original;
    
    const img = document.createElement('img');
    img.classList.add('gallery__image');
    img.dataset.source = galleryItem.original;
    img.src = galleryItem.preview;
    img.alt = galleryItem.description;
    
    item.appendChild(link);
    link.appendChild(img);

    galleryElements.push(item); 
});

list.append(...galleryElements);


list.addEventListener('click', onGalleryImageClick);

function onGalleryImageClick(event) {
    event.preventDefault();

    if (event.target.nodeName !== "IMG") {
        return;
    }
    const imageSrc = event.target.dataset.source;
    const instance = basicLightbox.create(`<img src="${imageSrc}" >`,
  {
    onShow: () => {
      window.addEventListener('keydown', onPressEscKey);
    },
    onClose: () => {
      window.removeEventListener('keydown', onPressEscKey);
    },
  });
    
    instance.show();
    
    function onPressEscKey(event) {
      if (event.code !== 'Escape') {
        return;
      }
        instance.close();
    }
}