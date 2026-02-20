// script.js
document.addEventListener("DOMContentLoaded", () => {
  console.log("Shadow Music Landingpage geladen.");

  /* ------------------------------------------------------------------
     NAVBAR: scrolled class + burger menu
  ------------------------------------------------------------------ */
  const navbar = document.getElementById("navbar");
  const burger = document.getElementById("burger");
  const navLinks = document.getElementById("nav-links");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    navLinks.classList.toggle("open");
  });

  // Close mobile menu when a link is clicked
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      burger.classList.remove("open");
      navLinks.classList.remove("open");
    });
  });

  /* ------------------------------------------------------------------
     SMOOTH SCROLL for nav links (offset for fixed navbar)
  ------------------------------------------------------------------ */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", (e) => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      const navHeight = navbar.offsetHeight;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });

  /* ------------------------------------------------------------------
     SCROLL-REVEAL via IntersectionObserver
  ------------------------------------------------------------------ */
  const revealSelectors = ".card, .cmd-card, .cmd-category, .contact-card, .reveal";
  const revealElements = document.querySelectorAll(revealSelectors);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => observer.observe(el));

  /* ------------------------------------------------------------------
     PARALLAX effect on hero banner
  ------------------------------------------------------------------ */
  const hero = document.getElementById("hero");
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        if (hero) {
          const offset = window.scrollY;
          hero.style.backgroundPositionY = `calc(50% + ${offset * 0.3}px)`;
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  /* ------------------------------------------------------------------
     Dynamic feature (kept from original)
  ------------------------------------------------------------------ */
  const featureList = document.querySelectorAll(".card ul");
  if (featureList.length) {
    featureList[0].innerHTML += "<li>Dynamisches Feature hinzugefügt ⚡</li>";
  }
});

