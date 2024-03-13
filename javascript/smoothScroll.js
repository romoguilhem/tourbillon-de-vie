
window.addEventListener('DOMContentLoaded', (event) => {
  // Vérifie si l'URL contient un fragment (par exemple, #section-b)
  if (window.location.hash) {
      // Faites défiler la page jusqu'à la section cible
      document.querySelector(window.location.hash).scrollIntoView({
          behavior: 'smooth'
      });
  }
});