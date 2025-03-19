// src/js/loading-screen.js

const loadingScreen = document.getElementById('loading-screen');
const loadingPercentage = document.querySelector('.loading-percentage');

let loaded = 0;
let minimumLoadingTime = 3000; // 3 segundos em milissegundos
let startTime = Date.now();

function updateLoadingPercentage() {
  loaded++;
  loadingPercentage.textContent = `${loaded}%`;

  if (loaded >= 100) {
    checkMinimumLoadingTime();
  } else {
    setTimeout(updateLoadingPercentage, 10); // Atualiza a cada 10ms
  }
}

function hideLoadingScreen() {
  loadingScreen.classList.add('hidden');
  setTimeout(() => {
    loadingScreen.style.display = 'none';
  }, 500); // Espera a transição terminar (0.5s)
}

function checkMinimumLoadingTime() {
  let endTime = Date.now();
  let elapsedTime = endTime - startTime;

  if (elapsedTime >= minimumLoadingTime) {
    hideLoadingScreen();
  } else {
    setTimeout(hideLoadingScreen, minimumLoadingTime - elapsedTime);
  }
}

function startLoading() {
  updateLoadingPercentage();
}

// Simula o carregamento do site
window.addEventListener('load', () => {
  loaded = 100;
});

export { startLoading };
