// src/js/loading-screen.js

const loadingScreen = document.getElementById('loading-screen');
const loadingPercentage = document.querySelector('.loading-percentage');
const introAnimationContainer = document.querySelector('.intro-animation-container');
const introAnimationContent = document.querySelector('.intro-animation-content');

let loaded = 0;
let loadingInterval;

function updateLoadingPercentage() {
  loaded++;
  loadingPercentage.textContent = `${loaded}%`;

  if (loaded >= 100) {
    clearInterval(loadingInterval); // Limpa o intervalo quando chega a 100%
    hideLoadingScreen(); // Chama a função para esconder a tela de carregamento
  }
}

function hideLoadingScreen() {
  loadingScreen.classList.add('hidden');
  setTimeout(() => {
    loadingScreen.style.display = 'none';
    showIntroAnimation(); // Chama a função para mostrar a animação
  }, 500); // Espera a transição terminar (0.5s)
}

function startLoading() {
  // Garante que a porcentagem comece em 0%
  loaded = 0;
  loadingPercentage.textContent = `${loaded}%`;

  // Inicia o intervalo para atualizar a porcentagem
  loadingInterval = setInterval(updateLoadingPercentage, 10);
}

function showIntroAnimation() {
  if(introAnimationContainer && introAnimationContent){
    introAnimationContainer.classList.add('active');
    introAnimationContent.classList.add('active');
  }
}

// Inicia o carregamento quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  startLoading();
});

export { startLoading };
