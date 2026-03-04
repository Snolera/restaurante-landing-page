
// ANIMÇÃO CARDS ABOUT US //

const cards = document.querySelectorAll(".box-card");

const observer = new IntersectionObserver((entries) => {
    
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, {
  threshold: 1
});

cards.forEach(card => observer.observe(card))


// FEATURED ANIMATION FIRST //

const first = document.querySelectorAll(".featured-first")

const analist = new IntersectionObserver((entries)=> {

  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active")
    }
  })
}, {
  threshold: 0.5
});

first.forEach(featured => analist.observe(featured))


 // ANIMAÇÃO CARDS FEATURED //

const cardsfeat = document.querySelectorAll(".cards-featured");

const observar = new IntersectionObserver((entries) => {
    
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, {
  threshold: 0.5
});

cardsfeat.forEach(card => observar.observe(card))


const bannerOne = document.querySelectorAll(".banner-contact");

const obs = new IntersectionObserver((entrada) => {

  entrada.forEach(entra => {
    if (entra.isIntersecting) {
      entra.target.classList.add("active")
    }
  });

}, {

  threshold: 0.5
});

bannerOne.forEach(contact => obs.observe(contact))
