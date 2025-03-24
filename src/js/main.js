// src/js/main.js
import '../styles/main.scss';
import { startLoading } from './loading-screen';
import { startScrollSections } from './scroll-sections';
import { startWhatsapp } from './whatsapp';
import { startVideoControl } from './video-control';
import { startWordAnimation } from './word-animation'; // Importa a função startWordAnimation

// Inicia a tela de carregamento
startLoading();

// Inicia o scroll das sections
startScrollSections();

// Inicia o botão de whatsapp
startWhatsapp();

// Inicia o controle do video
startVideoControl();

// Inicia a animação de palavras
startWordAnimation(); // Executa a função startWordAnimation

// Você pode usar o main.js para manipular o DOM e adicionar os componentes dinamicamente, se quiser.
console.log('Olá, mundo!');
