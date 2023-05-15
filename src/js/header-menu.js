import { setLayoutShift, resetLayoutShift } from './layout-shift';

export function headerMenu() {
  const header = document.querySelector('.header');

  if (!header) return;

  const headerMenu = header.querySelector('.js-header-menu');
  const catalogMenu = header.querySelector('.js-catalog-menu');
  const burger = header.querySelector('.js-header-burger');
  const catalogBtn = header.querySelector('.js-header-catalog-btn');

  burger.addEventListener('click', function (e) {
    e.preventDefault();
    if (headerMenu.classList.contains('active')) {
      resetLayoutShift();
      document.body.classList.remove('menu-open');
    } else {
      setLayoutShift();
      document.body.classList.add('menu-open');
      catalogMenu.classList.remove('active');
      catalogBtn.classList.remove('active');
    }
    headerMenu.classList.toggle('active');
    burger.classList.toggle('active');
  });

  catalogBtn.addEventListener('click', function (e) {
    e.preventDefault();
    if (catalogMenu.classList.contains('active')) {
      resetLayoutShift();
      document.body.classList.remove('menu-open');
    } else {
      setLayoutShift();
      document.body.classList.add('menu-open');
      headerMenu.classList.remove('active');
      burger.classList.remove('active');
    }
    catalogMenu.classList.toggle('active');
    catalogBtn.classList.toggle('active');
  });
}
