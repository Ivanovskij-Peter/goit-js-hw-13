import './styles.css';
import itemTemplate from './templates/item.hbs';
import refs from './js/refs.js';
import newServise from './js/servise';
import updateMarcup from './js/marcup';

refs.input.addEventListener('input', event => {
  refs.input.innerHTML = '';
  newServise.query = event.target.value;
  newServise.resetPage();
  fetchPictures(true);
  updateStateBtn(true, 'Загружаем...');
  refs.btn.classList.add('is-hidden');
});

function createElement(arr, bool) {
  const markup = itemTemplate(arr);
  updateMarcup(markup, bool);
}
let count = 0;
refs.btn.addEventListener('click', () => {
  count += 800;
  window.scrollTo({
    top: count,
    behavior: 'smooth',
  });
  fetchPictures(false);
});

function fetchPictures(bool) {
  newServise.fetchPictures().then(hits => {
    createElement(hits, bool);

    updateStateBtn(false, 'Показать еще');
    refs.btn.classList.remove('is-hidden');
  });
}
function updateStateBtn(bool, textbtn) {
  refs.btn.disabled = bool;
  refs.btnLabel.textContent = textbtn;
}
