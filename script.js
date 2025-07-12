gsap.registerPlugin(SplitText, ScrollTrigger);

const mobileSplit = new SplitText("#headline", { type: "chars" });

gsap.from(mobileSplit.chars, {
  scrollTrigger: {
    trigger: "#headline",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  opacity: 0,
  y: 20,
  duration: 0.6,
  ease: "power1.out",
  stagger: 0.01,
  delay: 2.5,
});
gsap.utils.toArray(".headliner").forEach((el) => {
  const split = new SplitText(el, { type: "words" });
  gsap.from(split.words, {
    scrollTrigger: {
      trigger: el,
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 20,
    duration: 1.2,
    ease: "power1.out",
    stagger: 0.01,

  });
});


ScrollReveal().reveal(".fir", {
  distance: "50px",

  delay: 2400,

  origin: "bottom",

  duration: 1000,

  easing: "ease-in-out",
});
ScrollReveal().reveal(".for", {
  distance: "50px",

  delay: 2000,

  origin: "bottom",

  duration: 1000,

  easing: "ease-in-out",
});
ScrollReveal().reveal(".fr", {
  distance: "50px",

  origin: "bottom",

  duration: 1000,

  easing: "ease-in-out",
});

let menu = document.querySelector(".menu");
function opens() {
  document.querySelector("ul").classList.toggle("active");
  document.querySelector(".menu").classList.toggle("yh");
}
