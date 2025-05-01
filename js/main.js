const menu = document.getElementById("menu");
const header = document.getElementById("header");
const menuBtn = document.getElementById("menuBtn");
const body = document.body;
menuBtn.onclick = () => {
  header.classList.toggle("active");
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  body.classList.toggle("active");
};
window.onclick = (e) => {
  if (e.target == menu) {
    header.classList.remove("active");
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("active");
  }
};

// scroll start
const scrollFunc = () => {
  if (window.scrollY >= 250) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};

const links = document.querySelectorAll(".nav__inner-link");
const sections = document.querySelectorAll(".anchor");
const changeLinkState = () => {
  let index = sections.length;
  while (--index && window.scrollY + 100 < sections[index].offsetTop) {}
  links.forEach((link) => link.classList.remove("active"));
  links[index]?.classList.add("active");
};
window.addEventListener("scroll", () => {
  changeLinkState();
  scrollFunc();
});
changeLinkState();
scrollFunc();
var wow = new WOW({
  boxClass: "wow",
  animateClass: "animated",
  offset: 0,
  mobile: true,
  live: true,
  scrollContainer: null,
  resetAnimation: true,
});
wow.init();

const lenis = new Lenis();
function raf(time) {
  lenis.raf(time);
  ScrollTrigger.update(); // Sync ScrollTrigger with Lenis
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);