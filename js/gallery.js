const images = [
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
        description: 'Hokkaido Flower',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
        description: 'Container Haulage Freight',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
        description: 'Aerial Beach View',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
        description: 'Flower Blooms',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
        description: 'Alpine Mountains',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
        description: 'Mountain Lake Sailing',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
        description: 'Alpine Spring Meadows',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
        description: 'Nature Landscape',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
        description: 'Lighthouse Coast Sea',
    },
];
const galleryElem = document.querySelector('.gallery');
let instance;

function itemCreatingGalleryImageTemplate(image) {
    return `
        <li class="gallery-item">
            <a class="gallery-link" href="${image.original}">
                <img
                    class="gallery-image"
                    src="${image.preview}"
                    data-source="${image.original}"
                    alt="${image.description}"
                />
            </a>
        </li>
    `;
}

function itemCreatingGalleryImagesTemplate(images) {
    return images.map(itemCreatingGalleryImageTemplate).join('');
}

function renderElem() {
    const markup = itemCreatingGalleryImagesTemplate(images);
    galleryElem.innerHTML = markup;
}

function onGalleryClick(event) {
    if (!event.target.closest('.gallery-item')) return;

    const imageURLbig = event.target.dataset.source;

    const modalImageTemplate = `<img src="${imageURLbig}" width="800" height="600">`;

    instance = basicLightbox.create(modalImageTemplate, {
        onShow: () => {
            window.addEventListener('keydown', onEscapePress);
        },
        onClose: () => {
            window.removeEventListener('keydown', onEscapePress);
        },
    });

    instance.show();
}

function onEscapePress(event) {
    if (event.code === 'Escape') {
        instance.close();
    }
}

galleryElem.addEventListener('click', onGalleryClick);

renderElem();