function createScrollObserver(selector, threshold = 0.5) {
  const elements = document.querySelectorAll(selector);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, { threshold });

  elements.forEach(element => observer.observe(element));
}

createScrollObserver(".box-card", 1);
createScrollObserver(".cards-featured");
createScrollObserver(".banner-contact");
createScrollObserver(".cards-coments");