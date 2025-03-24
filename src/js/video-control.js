// src/js/video-control.js

function startVideoControl() {
  const videoSection = document.querySelector('.section-video');
  const video = videoSection.querySelector('.video-background');

  if (!videoSection || !video) {
    console.error("Elementos .section-video ou .video-background não encontrados.");
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Calcula a porcentagem de visibilidade da seção
          const visiblePercentage = (entry.intersectionRect.height / entry.boundingClientRect.height) * 100;

          // Se 50% ou mais da seção estiver visível, reproduz o vídeo
          if (visiblePercentage >= 50) {
            video.play();
          } else {
            video.pause();
          }
        } else {
          video.pause();
        }
      });
    },
    {
      threshold: [0, 0.5, 1], // Dispara o callback quando 0%, 50% e 100% da seção estiver visível
    }
  );

  observer.observe(videoSection);
}

export { startVideoControl };
