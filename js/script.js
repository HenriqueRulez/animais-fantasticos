import ScrollSuave from './modules/scroll-suave.js';
import initAnimacaoScroll from './modules/scroll-animacao.js';

import { initTabNav } from './modules/tab.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropdown from './modules/dropdown.js';
import initMenuMobile from './modules/menu-mobile.js';

import initFuncionamento from './modules/funcionamento.js';
import initFetchAnimais from './modules/fetch-animais.js';
import initFetchBtc from './modules/fetch-btc.js';

const scrollSuave = new ScrollSuave('[data-menu=suave] a[href^="#"]');
scrollSuave.init();

initAnimacaoScroll();

initTabNav();
initModal();
initTooltip();
initDropdown();
initMenuMobile();

initFuncionamento();
initFetchAnimais();
initFetchBtc();
