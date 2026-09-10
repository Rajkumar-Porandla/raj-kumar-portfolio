const links = [...document.querySelectorAll('.site-nav a')];
const sections = links
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const activeId = `#${entry.target.id}`;
      links.forEach((link) => {
        link.toggleAttribute('aria-current', link.getAttribute('href') === activeId);
      });
    });
  },
  { rootMargin: '-35% 0px -55% 0px' },
);

sections.forEach((section) => observer.observe(section));
document.querySelector('#year').textContent = String(new Date().getFullYear());
