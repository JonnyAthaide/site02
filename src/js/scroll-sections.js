// src/js/scroll-sections.js

function handleScroll() {
  const sections = document.querySelectorAll('section.black');
  const windowHeight = window.innerHeight;
  const triggerPoint = windowHeight * 0.15; // 15% da altura da viewport

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const scrollPosition = window.scrollY;

    // Verifica se a seção está próxima do topo da viewport (15%)
    if (scrollPosition + triggerPoint > sectionTop && scrollPosition < sectionTop + sectionHeight) {
      section.classList.add('black-active');
    } else {
      section.classList.remove('black-active');
    }
  });
}

function startScrollSections() {
  window.addEventListener('scroll', handleScroll);
  handleScroll();
}

export { startScrollSections };