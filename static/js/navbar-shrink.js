window.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  if (!navbar) {
    return;
  }

  console.log("repaint!!");

  const isInterior = navbar.classList.contains("not-home");

  // Siempre quitar preload (bloquea animación inicial)
  setTimeout(() => {
    navbar.classList.remove("preload");

    // Solo en interiores, aplicamos la animación

    console.log("is inte: " , isInterior)
    if (isInterior) {
      // Forzamos reflow para que la animación funcione
      void navbar.offsetHeight;
      navbar.classList.add("shrink");
    }
  }, 10);

  


  const handleScroll = () => {
    if (window.scrollY > 10) {
      navbar.classList.add("shrink");
    }
  };

  handleScroll();
  window.addEventListener("scroll", handleScroll);
});
