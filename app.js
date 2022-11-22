'use strict';

const hamburgerMenu = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburgerMenu.addEventListener('click', function (e) {
  menu.classList.toggle('show-items');
});
