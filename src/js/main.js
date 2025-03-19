// src/js/main.js
import '../styles/main.scss';
import { startLoading } from './loading-screen';
import { startScrollSections } from './scroll-sections';

// Inicia a tela de carregamento
startLoading();

// Inicia o scroll das sections
startScrollSections();

// Você pode usar o main.js para manipular o DOM e adicionar os componentes dinamicamente, se quiser.
console.log('Olá, mundo!');
