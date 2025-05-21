window.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  if (!navbar) {
    return;
  }
  
  const isInterior = navbar.classList.contains("not-home");

  setTimeout(() => {
    navbar.classList.remove("preload");
    if (isInterior) {
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
