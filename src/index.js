import './styles.css';
import itemTemplate from './templates/item.hbs';
import refs from './js/refs.js';
import newServise from './js/servise';
import updateMarcup from './js/marcup';

refs.input.addEventListener('input', event => {
  newServise.query = event.target.value;

  newServise.resetPage();
  fetchPictures();
});

function createElement(arr) {
  const markup = itemTemplate(arr);
  updateMarcup(markup);
}
refs.btn.addEventListener('click', () => {
  fetchPictures();
  window.scrollTo({
    top: 100,
    behavior: 'smooth',
  });
});

function fetchPictures() {
  refs.btn.disabled = true;
  refs.btnLabel.textContent = 'Загружаем...';
  refs.btnSpinner.classList.remove('is-hidden');

  newServise.fetchPictures().then(hits => {
    createElement(hits);
    refs.btn.disabled = false;
    refs.btnLabel.textContent = 'Показать еще';
    refs.btnSpinner.classList.add('is-hidden');
  });
}
