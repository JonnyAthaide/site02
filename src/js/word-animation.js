// src/js/word-animation.js

function startWordAnimation() {
  const h1 = document.querySelector('.section-intro h1');

  if (h1) {
    const text = h1.textContent;
    const words = text.split(' '); // Divide o texto em palavras
    h1.innerHTML = ''; // Limpa o conteúdo do h1

    for (let i = 0; i < words.length; i++) {
      const span = document.createElement('span');
      span.textContent = words[i];
      span.style.animationDelay = `${i * 0.1}s`; // Ajuste o atraso aqui
      h1.appendChild(span);
    }
  }
}

export { startWordAnimation };
