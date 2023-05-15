import { setViewportHeigth } from './js/viewport-height';
import { initSwipers } from './js/swipers';
import { headerMenu } from './js/header-menu';
import { initDropdowns } from './js/dropdowns';
import { initSelects } from './js/selects';
import { tabs } from './js/tabs';
import { accordions } from './js/accordions';

setViewportHeigth();
headerMenu();
initSwipers();
initDropdowns();
initSelects();
tabs();
accordions();

import './sass/styles.scss';