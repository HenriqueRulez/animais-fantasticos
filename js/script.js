import ScrollSuave from './modules/scroll-suave.js';
import TabNav from './modules/tab.js';
import Accordion from './modules/accordion.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';

import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import fetchBtc from './modules/fetch-btc.js';
import fetchAnimais from './modules/fetch-animais.js';
import ScrollAnima from './modules/scroll-anima.js';
import DropdownMenu from './modules/dropdown-menu.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
);
tabNav.init();

const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]'
);
modal.init();

const toolTip = new Tooltip('[data-tooltip]');
toolTip.init();

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

const dropdownMenu = new DropdownMenu('[data-dropdown]');
dropdownMenu.init();

initMenuMobile();
initFuncionamento();

fetchAnimais('../../animaisapi.json', '.numeros-grid');
fetchBtc('https://blockchain.info/ticker', '.btc-preco');
