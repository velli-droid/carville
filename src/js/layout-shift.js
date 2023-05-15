import { getScrollbarWidth } from './scrollbar-width';

export function setLayoutShift() {
  let offset = getScrollbarWidth();
  document.body.style.paddingRight = `${offset}px`;
}

export function resetLayoutShift() {
  document.body.style.paddingRight = '';
}
