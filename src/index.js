import './styles.css';
import itemTemplate from './templates/item.hbs';
import refs from './js/refs.js';
import newServise from './js/servise';
import updateMarcup from './js/marcup';

refs.input.addEventListener('input', event => {
  newServise.query = event.target.value;
  newServise.resetPage();
  fetchPictures(true);
  updateStateBtn(true, 'Загружаем...');
});

function createElement(arr, bool) {
  const markup = itemTemplate(arr);
  updateMarcup(markup, bool);
}
refs.btn.addEventListener('click', () => {
  fetchPictures(false);
  window.scroll({
    top: 900,
    behavior: 'smooth',
  });
});

function fetchPictures(bool) {
  newServise.fetchPictures().then(hits => {
    createElement(hits, bool);
    updateStateBtn(false, 'Показать еще');
  });
}
function updateStateBtn(bool, textbtn) {
  refs.btn.disabled = bool;
  refs.btnLabel.textContent = textbtn;
  // refs.btnSpinner.classList.toggle('is-hidden');
}
