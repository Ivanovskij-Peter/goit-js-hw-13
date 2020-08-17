import './styles.css';
import itemTemplate from './templates/item.hbs';
import refs from './js/refs.js';
//   const options = {
//     headers: {
//       Autorization: apiKey,
//     },
//   };

const apiKey = '17938696-a211d439281abf74b3f685096';
function fetchPictures() {
  let query = 'cat';
  const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${query}&page=1&per_page=12&key=${apiKey}`;
  return fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      updateMarcup(itemTemplate(data));
    });
}

fetchPictures();
function updateMarcup(param) {
  refs.gallery.insertAdjacentHTML('beforeend', param);
}
