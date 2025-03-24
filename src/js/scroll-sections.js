// src/js/scroll-sections.js

function handleScroll() {
  const sections = document.querySelectorAll('section.black');
  const scrollPosition = window.scrollY;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    // Verifica se o topo da seção está no topo da viewport
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      section.classList.add('black-active');
    } else {
      section.classList.remove('black-active');
    }
  });
}

function startScrollSections() {
  window.addEventListener('scroll', handleScroll);
  // Chama a função uma vez no carregamento para verificar se alguma seção já está no topo
  handleScroll();
}

export { startScrollSections };
