// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
menuBtn.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => navLinks.classList.remove("open"))
);

// Typing effect
const words = ["responsive websites", "clean interfaces", "fun JavaScript apps"];
const typingEl = document.getElementById("typing");
let w = 0, c = 0, deleting = false;

function type() {
  const word = words[w];
  typingEl.textContent = word.slice(0, c);
  if (!deleting && c < word.length) c++;
  else if (deleting && c > 0) c--;
  else if (!deleting) { deleting = true; return setTimeout(type, 1200); }
  else { deleting = false; w = (w + 1) % words.length; }
  setTimeout(type, deleting ? 40 : 90);
}
type();

// Reveal sections on scroll
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("show"); }),
  { threshold: 0.15 }
);
reveals.forEach((r) => observer.observe(r));

// Highlight active nav link
const sections = document.querySelectorAll("section[id]");
const links = navLinks.querySelectorAll("a");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((s) => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  links.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === "#" + current));
});

// Contact form (demo)
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  document.getElementById("formMsg").textContent = "Thanks " + name + "! Your message was sent.";
  e.target.reset();
});