const links = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

const hundalNavigationClick = () => {
  links.forEach((link, index) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      sections.forEach((section) => {
        if (!section.classList.contains('hidden')) {
          section.classList.add('hidden');
        }
      });
      links.forEach((link) => {
        if (!link.classList.contains('color-black')) {
          link.classList.add('color-black');
        }
      });
      sections[index].classList.remove('hidden');
      links[index].classList.remove('color-black');
    });
  });
};

export { hundalNavigationClick as default };