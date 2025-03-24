function startWhatsapp() {
  // Botão de WhatsApp
  const whatsappButtonIcon = document.querySelector('.whatsapp-button-icon');
  const whatsappBox = document.querySelector('.whatsapp-box');

  if (whatsappButtonIcon && whatsappBox) {
    whatsappButtonIcon.addEventListener('click', () => {
      whatsappBox.classList.toggle('active');
    });

    // Fechar o box ao clicar fora dele
    document.addEventListener('click', (event) => {
      if (!whatsappButtonIcon.contains(event.target) && !whatsappBox.contains(event.target)) {
        whatsappBox.classList.remove('active');
      }
    });
  } else {
    console.error("Elementos .whatsapp-button-icon ou .whatsapp-box não encontrados.");
  }
}

export { startWhatsapp };
