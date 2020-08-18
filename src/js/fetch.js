import itemtemplate from '../templates/item.hbs';
import updateMarcup from '../js/marcup';

const apiKey = '17938696-a211d439281abf74b3f685096';

function fetchPictures(query, page = 1) {
  const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=3&key=${apiKey}`;
  return fetch(url).then(res => res.json());
}
export default fetchPictures;
