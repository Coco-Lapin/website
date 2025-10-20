// ---------------- NAVBAR ----------------

// Mobile menu toggle
document.addEventListener("DOMContentLoaded", function () {
  const mobileToggle = document.getElementById("mobile-toggle");
  const navbarMenu = document.getElementById("navbar-menu");
  const navbar = document.getElementById("navbar");

  if (mobileToggle && navbarMenu) {
    mobileToggle.addEventListener("click", function () {
      this.classList.toggle("active");
      navbarMenu.classList.toggle("active");
    });
  }
});

// Navbar functionality - wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {
  const mobileToggle = document.getElementById("mobile-toggle");
  const navbarMenu = document.getElementById("navbar-menu");
  const navbar = document.getElementById("navbar");

  // Navbar scroll effect
  if (navbar) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  }

  // Close mobile menu when clicking on a link
  document.querySelectorAll(".navbar-link").forEach((link) => {
    link.addEventListener("click", () => {
      if (mobileToggle && navbarMenu) {
        mobileToggle.classList.remove("active");
        navbarMenu.classList.remove("active");
      }
    });
  });

  // Active link highlighting (optional)
  document.querySelectorAll(".navbar-link").forEach((link) => {
    link.addEventListener("click", function (e) {
      // Remove active class from all links
      document
        .querySelectorAll(".navbar-link")
        .forEach((l) => l.classList.remove("active"));
      // Add active class to clicked link
      this.classList.add("active");
    });
  });

  // Mobile dropdown toggle functionality
  document
    .querySelectorAll(".dropdown > .navbar-link")
    .forEach((dropdownLink) => {
      dropdownLink.addEventListener("click", function (e) {
        // Only prevent default and toggle on mobile (when mobile menu is active)
        if (
          window.innerWidth <= 768 ||
          navbarMenu.classList.contains("active")
        ) {
          e.preventDefault();
          const dropdown = this.parentElement;

          // Close other dropdowns
          document.querySelectorAll(".dropdown").forEach((otherDropdown) => {
            if (otherDropdown !== dropdown) {
              otherDropdown.classList.remove("active");
            }
          });

          // Toggle current dropdown
          dropdown.classList.toggle("active");
        }
      });
    });

  // Close dropdowns when window is resized to desktop
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      document.querySelectorAll(".dropdown").forEach((dropdown) => {
        dropdown.classList.remove("active");
      });
    }
  });
});

function sendMail(event) {
  event.preventDefault(); // Empêche l'envoi classique du formulaire

  var name = document.getElementById("UserName").value;
  var userMail = document.getElementById("UserEmail").value;
  var subject = document.getElementById("UserSubject").value;
  var message = document.getElementById("UserMessage").value;

  var mailto =
    "mailto:info@garage-vandeput.be" +
    "?subject=" +
    encodeURIComponent(subject) +
    "&body=" +
    encodeURIComponent(
      "Nom: " +
        name +
        "\n" +
        "Email: " +
        userMail +
        "\n\n" +
        "Message:\n" +
        message
    );

  window.location.href = mailto;
}
