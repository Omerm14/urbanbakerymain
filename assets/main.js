// Close the mobile nav dropdown after a link is tapped.
document.addEventListener("click", (event) => {
  const link = event.target.closest(".mobile-nav a");
  if (!link) return;
  const details = link.closest(".mobile-nav");
  if (details) details.removeAttribute("open");
});

// Highlight the current section in the header nav while scrolling.
const sections = document.querySelectorAll("main > section[id]");
const navLinks = document.querySelectorAll(".site-nav a");

const setActive = (id) => {
  navLinks.forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
  });
};

if ("IntersectionObserver" in window && sections.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    },
    { rootMargin: "-45% 0px -45% 0px" }
  );
  sections.forEach((section) => observer.observe(section));
}
