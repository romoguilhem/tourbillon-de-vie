// Fonction smoothScroll pour un scroll smooth
function smoothScroll(target) {
  document.querySelector(target).scrollIntoView({
    behavior: 'smooth'
  });
}

//
// On gère le dropdown-button
// 
var dropdownBtn = document.querySelector('.drop-button');
var dropdownContent = document.querySelector('.dropdown-content');

// Event Listenner sur le bouton
// dropdownBtn.addEventListener('click', function() {
//     // On check si le contenu est affiché
//     var isVisible = dropdownContent.classList.contains('show');

//     // On affiche/cache le dropdown
//     if (isVisible) {
//         dropdownContent.classList.remove('show');
//     } else {
//         dropdownContent.classList.add('show');
//     }
// });

// // Si on clic loin du bouton dropdown, on le cache
// window.addEventListener('click', function(event) {
//     if (!event.target.matches('.drop-button')) {
//         if (dropdownContent.classList.contains('show')) {
//             dropdownContent.classList.remove('show');
//         }
//     }
// });

// 
// On gère les liens du dropdown
// 
var dropdownLinks = document.querySelectorAll('.dropdown-content a');

// On boucle à travers chaque lien, on ajoute un listenner pour go smoothly
dropdownLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        // event.preventDefault();
        var target = link.getAttribute('href');
        smoothScroll(target);
    });
});
