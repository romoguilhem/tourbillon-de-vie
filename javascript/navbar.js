let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Faites défiler vers le bas
        navbar.classList.add('hidden');
    } else {
        // Faites défiler vers le haut
        navbar.classList.remove('hidden');
    }

    lastScrollTop = scrollTop;
});
