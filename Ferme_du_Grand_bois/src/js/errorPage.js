// Fonction pour retourner à l'accueil
function goHome() {
  // Remplacez '/' par votre URL d'accueil
  window.location.href = "/";
}

// Fonction pour retourner à la page précédente
function goBack() {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    goHome();
  }
}

// Fonction de recherche
function performSearch(event) {
  event.preventDefault();
  const searchTerm = document.getElementById("search-input").value.trim();

  if (searchTerm) {
    // Remplacez cette URL par votre page de recherche
    window.location.href = `/search?q=${encodeURIComponent(searchTerm)}`;

    // Ou utilisez Google Search pour votre site :
    // window.open(`https://www.google.com/search?q=site:votresite.com ${encodeURIComponent(searchTerm)}`, '_blank');
  }
}

// Animation d'apparition progressive des éléments
document.addEventListener("DOMContentLoaded", function () {
  // Ajouter une classe pour déclencher les animations
  document.body.classList.add("loaded");

  // Gérer l'entrée par clavier sur la recherche
  document
    .getElementById("search-input")
    .addEventListener("keyup", function (e) {
      if (e.key === "Enter") {
        performSearch(e);
      }
    });
});

// Effet de parallaxe léger sur les éléments flottants
document.addEventListener("mousemove", function (e) {
  const elements = document.querySelectorAll(".floating-element");
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  elements.forEach((element, index) => {
    const speed = (index + 1) * 0.5;
    const xMove = (x - 0.5) * speed * 20;
    const yMove = (y - 0.5) * speed * 20;

    element.style.transform += ` translate(${xMove}px, ${yMove}px)`;
  });
});

// Message de console amusant pour les développeurs
console.log(`
🚀 Oups ! Vous avez trouvé notre page 404 !

Si vous êtes développeur et que vous voyez ceci,
voici quelques informations utiles :

📍 URL actuelle: ${window.location.href}
📅 Timestamp: ${new Date().toISOString()}
🔍 User Agent: ${navigator.userAgent}

Besoin d'aide ? Contactez notre équipe technique !
`);

// Redirection automatique après 30 secondes (optionnel)
// Décommentez si vous voulez cette fonctionnalité
let redirectTimer = 30;
const timerElement = document.createElement("div");
timerElement.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: rgba(255,255,255,0.9);
    color: #333;
    padding: 10px 20px;
    border-radius: 25px;
    font-size: 14px;
    backdrop-filter: blur(10px);
`;
document.body.appendChild(timerElement);

const countdown = setInterval(() => {
  timerElement.textContent = `Redirection automatique dans ${redirectTimer}s`;
  redirectTimer--;

  if (redirectTimer < 0) {
    clearInterval(countdown);
    goHome();
  }
}, 1000);

// Arrêter le timer si l'utilisateur interagit avec la page
document.addEventListener("click", () => {
  clearInterval(countdown);
  timerElement.remove();
});
