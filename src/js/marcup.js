import refs from './refs';
function updateMarcup(param, clearGallary = true) {
  if (clearGallary) {
    refs.gallery.innerHTML = '';
  }
  refs.gallery.insertAdjacentHTML('beforeend', param);
}
export default updateMarcup;
