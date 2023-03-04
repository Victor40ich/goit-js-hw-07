import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const items = []

galleryItems.forEach(element => {
	const galleryItem = document.createElement('a');
	galleryItem.className = 'gallery__item';
	galleryItem.href = element.original;
	const galleryImage = document.createElement('img');
    galleryImage.className = 'gallery__image';
    galleryImage.src = element.preview;
    galleryImage.setAttribute('data-source', element.original);
    galleryImage.alt = element.description;

	galleryItem.append(galleryImage)
	items.push(galleryItem)
})

galleryContainer.append(...items);

new SimpleLightbox('.gallery a', {
	captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250
})