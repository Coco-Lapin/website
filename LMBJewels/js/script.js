tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0f0049",
        "background-dark": "#101010",
        "text-light": "#0f0049",
        "text-dark": "#ffffff",
        "accent-gold": "#d4af37",
        "background-light": "#f6f5f8",
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Lora", "serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
    },
  },
};

// Menu Mobile - Toggle functionality
document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const menuButton = document.querySelector("[data-menu-toggle]");
  const mobileMenu = document.querySelector("[data-mobile-menu]");

  if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");
      mobileMenu.classList.toggle("flex");
    });

    // Close menu when clicking on a link
    const menuLinks = mobileMenu.querySelectorAll("a");
    menuLinks.forEach((link) => {
      link.addEventListener("click", function () {
        mobileMenu.classList.add("hidden");
        mobileMenu.classList.remove("flex");
      });
    });
  }

  // Newsletter form submission with modal
  const newsletterForm = document.querySelector("[data-newsletter-form]");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const emailInput = this.querySelector('input[type="email"]');
      const emailValue = emailInput.value.trim();

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailValue || !emailRegex.test(emailValue)) {
        showModal(
          "Erreur",
          "Veuillez entrer une adresse email valide.",
          "error"
        );
        return;
      }

      // Success modal
      showModal(
        "Succès!",
        "Merci de votre inscription à notre newsletter.",
        "success"
      );
      emailInput.value = "";
    });
  }

  // Custom piece form submission with modal
  const customForm = document.querySelector("[data-custom-form]");
  if (customForm) {
    customForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const firstName = this.querySelector("#first-name")?.value.trim();
      const lastName = this.querySelector("#last-name")?.value.trim();
      const email = this.querySelector("#email")?.value.trim();
      const projectDetails =
        this.querySelector("#project-details")?.value.trim();

      let errors = [];

      // Validation
      if (!firstName) errors.push("Le prénom est requis.");
      if (!lastName) errors.push("Le nom est requis.");

      if (!email) {
        errors.push("L'email est requis.");
      } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          errors.push("L'adresse email est invalide.");
        }
      }

      if (!projectDetails) errors.push("Veuillez décrire votre projet.");

      if (errors.length > 0) {
        showModal("Erreurs de formulaire", errors.join("\n"), "error");
        return;
      }

      // Success
      showModal(
        "Formulaire envoyé!",
        "Nous avons reçu votre demande. Nous vous recontacterons bientôt.",
        "success"
      );
      this.reset();
    });
  }

  // Modal function
  function showModal(title, message, type = "info") {
    // Remove existing modal if any
    const existingModal = document.getElementById("lmb-modal");
    if (existingModal) existingModal.remove();

    const modal = document.createElement("div");
    modal.id = "lmb-modal";
    modal.className =
      "fixed inset-0 bg-black/50 flex items-center justify-center z-[9999] p-4";

    const iconClass = type === "error" ? "text-red-500" : "text-green-500";
    const iconName = type === "error" ? "error" : "check_circle";
    const bgClass =
      type === "error"
        ? "border-red-200 dark:border-red-800"
        : "border-green-200 dark:border-green-800";

    modal.innerHTML = `
      <div class="bg-white dark:bg-background-dark rounded-lg shadow-2xl max-w-md w-full border ${bgClass}">
        <div class="p-6">
          <div class="flex items-center gap-3 mb-4">
            <span class="material-symbols-outlined ${iconClass} text-3xl">${iconName}</span>
            <h2 class="font-display text-xl font-bold text-gray-900 dark:text-white">${title}</h2>
          </div>
          <p class="text-gray-600 dark:text-gray-300 whitespace-pre-line text-sm leading-relaxed">${message}</p>
          <div class="mt-6 flex gap-3">
            <button class="flex-1 px-4 py-2 bg-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity" id="modal-close-btn">
              OK
            </button>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    const closeBtn = document.getElementById("modal-close-btn");
    closeBtn.addEventListener("click", () => modal.remove());

    // Auto close after 5 seconds
    setTimeout(() => {
      if (modal.parentElement) modal.remove();
    }, 5000);

    // Close on backdrop click
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.remove();
    });
  }

  // Contact form submission with modal
  const contactForm = document.querySelector("[data-contact-form]");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = this.querySelector('input[name="name"]')?.value.trim();
      const email = this.querySelector('input[name="email"]')?.value.trim();
      const subject = this.querySelector('input[name="subject"]')?.value.trim();
      const message = this.querySelector(
        'textarea[name="message"]'
      )?.value.trim();

      let errors = [];

      // Validation
      if (!name) errors.push("Le nom est requis.");

      if (!email) {
        errors.push("L'email est requis.");
      } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          errors.push("L'adresse email est invalide.");
        }
      }

      if (!subject) errors.push("Le sujet est requis.");
      if (!message) errors.push("Le message est requis.");

      if (errors.length > 0) {
        showModal("Erreurs de formulaire", errors.join("\n"), "error");
        return;
      }

      // Success
      showModal(
        "Message envoyé!",
        "Merci de nous avoir contactés. Nous vous répondrons dans les plus brefs délais.",
        "success"
      );
      this.reset();
    });
  }
});
