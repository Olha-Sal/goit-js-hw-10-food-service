import menu from '../menu.json';
import TemplatesMenu from '../templates/menu_food.hbs';

const menuContainer = document.querySelector('.js-menu');
const cardsMenu = createCardMenu(menu);
const currentThemeEl = document.querySelector('#theme-switch-toggle');
const themeBody = document.querySelector('body');

menuContainer.insertAdjacentHTML('beforeend', cardsMenu);

function createCardMenu(menu) {
  return menu.map(TemplatesMenu).join('');
}

currentThemeEl.addEventListener('change', changeThem);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

let currentTheme = localStorage.getItem('currrentTeme') || Theme.LIGHT;
themeBody.classList.add(currentTheme);
currentThemeEl.checked = currentTheme === Theme.DARK;

function changeThem(evt) {
  if (currentTheme === Theme.LIGHT) {
    currentTheme = Theme.DARK;
  } else {
    currentTheme = Theme.LIGHT;
  }
  themeBody.className = currentTheme;
  localStorage.setItem('currrentTeme', currentTheme);
}
