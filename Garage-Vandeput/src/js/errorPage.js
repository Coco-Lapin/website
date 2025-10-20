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

document.addEventListener("mousemove", function (e) {
  const elements = document.querySelectorAll(".floating-element");
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  elements.forEach((element, index) => {
    const speed = (index + 1) * 0.5;
    const xMove = (x - 0.5) * speed * 20;
    const yMove = (y - 0.5) * speed * 20;

    element.style.transform = `translate(calc(-50% + ${xMove}px), calc(${yMove}px))`;
    element.style.opacity = 1; // ils apparaissent au survol
    element.style.transitionDelay = `${index * 0.15}s`;
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
