import { galleryItems } from './gallery-items.js';

console.log(galleryItems);
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const items = []

galleryItems.forEach(element => {
	const galleryItem = document.createElement('div');
	galleryItem.className = 'gallery__item';
	const galleryLink = document.createElement('a');
	galleryLink.className = 'gallery__link';
	galleryLink.href = element.original;
	const galleryImage = document.createElement('img');
    galleryImage.className = 'gallery__image';
    galleryImage.src = element.preview;
    galleryImage.setAttribute('data-source', element.original);
    galleryImage.alt = element.description;

	galleryItem.append(galleryLink)
	galleryLink.append(galleryImage)
	items.push(galleryItem)
})

galleryContainer.append(...items);

galleryContainer.addEventListener('click', evt => {
    evt.preventDefault();
    if (evt.target.nodeName !== 'IMG') {
		return
	}

    const selectedImage = evt.target.getAttribute('data-source')

    const instance = basicLightbox.create(`
    <img src="${selectedImage}" width="500" height="500">
`)

    instance.show()
    
    galleryContainer.addEventListener('keydown', evt => {
		if (evt.key === 'Escape') {
			instance.close()
		}
	})
})



