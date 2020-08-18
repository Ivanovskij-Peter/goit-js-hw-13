import refs from './refs';
function updateMarcup(param) {
  refs.gallery.innerHTML = '';
  refs.gallery.insertAdjacentHTML('beforeend', param);
}
export default updateMarcup;
