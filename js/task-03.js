const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const gallery = document.querySelector('.gallery');
const imagesList = images.map((image) => `<li class="gallery__item"><img class="gallery__image" src="${image.url}" alt="${image.alt}"></li>`
).join("");
gallery.insertAdjacentHTML("beforeend", imagesList);

const sheet = document.createElement("style");
sheet.innerHTML = `
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.gallery {
  display: flex;
  width: 100vw;
  padding-top: 40px;
  margin: 0 auto;
  list-style-type: none;
  }
 .gallery__image {
  display: flex;
  width: 450px;
  height: 300px;
  padding: 10px;
 }
`;
document.head.appendChild(sheet);
