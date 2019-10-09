//Importando o default do arquivo
//O nome do import não precisa ser igual ao nome da função neste caso
import initScrollSuave from './modules/scroll-suave.js'
import initAnimacaoScroll from './modules/scroll-animacao.js'
import initAccordion from './modules/accordion.js'
//Import individual deve informar o nome das funcoes
//Ideal importar apenas um modulo
import { initTabNav } from './modules/tab.js'
import initModal from './modules/modal.js'
import initTooltip from './modules/tooltip.js'
import initDropdown from './modules/dropdown.js'
import initMenuMobile from './modules/menu-mobile.js'

import initFuncionamento from './modules/funcionamento.js'
import initFetchAnimais from './modules/fetch-animais.js'
import initFetchBtc from './modules/fetch-btc.js'

initScrollSuave();
initAnimacaoScroll();
initAccordion();
initTabNav();
initModal();
initTooltip();
initDropdown();
initMenuMobile();

initFuncionamento();
initFetchAnimais();
initFetchBtc();


