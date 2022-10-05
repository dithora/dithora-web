'use strict';

const modalData = {
  beakr: {
    title: 'DarkSoul',
    description:
      'Demonstrated success in designing, developing, and publishing a social and dating mobile application utilizing the latest technologies.',
    images: ['./images/projects/beakr1.jpg'],
    links: [
      {
        label: 'Website',
        value: 'https://dark-soul.space,
      },
    ],
  },
  'hw-todo': {
    title: 'HW Todo',
    description:
      'Created an application using Python framework Flask along with a group that helps students with assignments that synchronize with Canvas LMS and lets you add your own',
    images: ['./images/projects/hw-todo1.jpg', './images/projects/hw-todo2.jpg'],
    links: [
      {
        label: 'GitHub',
        value: 'https://github.com/francisseverino/hw-todo',
      },
    ],
  },
  socialapp: {
    title: 'SocialApp',
    description:
      'Applied remarkable efficiency and developed a social application that allows people to chat, make friends, or date.',
    images: [
      './images/projects/socialapp1.jpg',
      './images/projects/socialapp2.jpg',
      './images/projects/socialapp3.jpg',
      './images/projects/socialapp4.jpg',
    ],
    links: [],
  },
  autove: {
    title: 'Autove',
    description:
      'Demonstrated success in designing, developing, and publishing a mobile application to facilitate users in finding any parts, color codes, information, and more for any vehicle by using the app.',
    images: ['./images/projects/autove1.jpg', './images/projects/autove2.jpg'],
    links: [
      {
        label: 'Website',
        value: 'https://autove.fixove.com',
      },
    ],
  },
  flixo: {
    title: 'Flixo',
    description: 'Flixio React app that uses “themoviedb” API to display a catalog of movies and TV shows.',
    images: ['./images/projects/flixo1.jpg', './images/projects/flixo2.jpg'],
    links: [
      {
        label: 'GitHub',
        value: 'https://github.com/francisseverino/Flixo',
      },
    ],
  },
  'covid-19': {
    title: 'COVID-19',
    description: 'Flixio React app that uses “themoviedb” API to display a catalog of movies and TV shows.',
    images: ['./images/projects/covid1.jpg', './images/projects/covid2.jpg', './images/projects/covid3.jpg'],
    links: [
      {
        label: 'Website',
        value: 'https://francisseverino.github.io/covid19-app/',
      },
      {
        label: 'GitHub',
        value: 'https://github.com/francisseverino/covid19-app',
      },
    ],
  },
};

// Show menu
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }
};

// Set Active link and Remove Menu
const linkAction = () => {
  const navMenu = document.getElementById('nav-menu');
  const toggle = document.getElementById('nav-toggle');
  toggle.checked = false;
  navMenu.classList.remove('show');
};

// Nav indicator highlight on scroll
const navIndicatorOnScroll = () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav__link');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(li => {
      li.classList.remove('active');
      if (li.href.includes(current)) {
        li.classList.add('active');
      }
    });
  });
};

const toggleThemeIcon = theme => {
  const themeSwitcher = document.getElementById('theme-switcher');
  const themeSwitcherIcon = themeSwitcher.getElementsByClassName('far')[0];
  if (theme === 'light') {
    themeSwitcherIcon.classList.remove('fa-sun');
    themeSwitcherIcon.classList.add('fa-moon');
  } else if (theme === 'dark') {
    themeSwitcherIcon.classList.remove('fa-moon');
    themeSwitcherIcon.classList.add('fa-sun');
  }
};

const switchThemes = () => {
  const currentTheme = localStorage.getItem('theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  document.documentElement.setAttribute('data-theme', newTheme);
  toggleThemeIcon(newTheme);
  localStorage.setItem('theme', newTheme);
};

const darkMode = () => {
  const themeSwitcher = document.getElementById('theme-switcher');
  const currentTheme = localStorage.getItem('theme');

  if (currentTheme === 'dark') {
    toggleThemeIcon('dark');
  } else if (currentTheme === 'light') {
    toggleThemeIcon('light');
  }

  themeSwitcher.addEventListener('click', switchThemes);
};

//Back to top button
const scrollTop = () => {
  const scrollTopButton = document.getElementById('scroll-top-button');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      scrollTopButton.parentElement.classList.add('show');
    } else {
      scrollTopButton.parentElement.classList.remove('show');
    }
  });

  scrollTopButton.addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
};

// Slideshow
const slideshow = id => {
  let slideIndex = 1;
  let container = document.getElementById('slides');

  //Reset content
  container.innerHTML = '';

  //Loading images
  modalData[id].images.map((image, index) => {
    container.innerHTML += `<div class="slide ${index === 0 ? 'show' : ''}">
        <div class="slide__number">${index + 1} / ${modalData[id].images.length}</div>
        <img src=${image} style="width:100%">
      </div>`;
  });

  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');

  prevButton.addEventListener('click', () => {
    showSlides(slideIndex - 1);
  });

  nextButton.addEventListener('click', () => {
    showSlides(slideIndex + 1);
  });

  showSlides(slideIndex);

  function showSlides(index) {
    let i;
    let slides = document.getElementsByClassName('slide');

    if (index > modalData[id].images.length) {
      index = 1;
    }
    if (index < 1) {
      index = modalData[id].images.length;
    }

    for (i = 0; i < modalData[id].images.length; i++) {
      slides[i].classList.remove('show');
    }

    slides[index - 1].classList.add('show');
    slideIndex = index;

    // setTimeout(() => {
    //   showSlides(index + 1);
    // }, 4000);
  }
};

// Modal
const modal = () => {
  // Get the modal
  const modal = document.getElementById('modal');
  const projects = document.getElementsByClassName('project__button');
  const modalClose = document.getElementsByClassName('modal__close')[0];

  // When the user clicks on the button, open the modal
  for (let project of projects) {
    project.onclick = function () {
      modal.style.display = 'block';
      const { id } = this.dataset;

      slideshow(id);

      document.getElementById('modal-header').textContent = modalData[id].title;
      document.getElementById('modal-description').textContent = modalData[id].description;

      // <a href="" target="_blank" id="modal-website" class="modal__website">GitHub</a>

      const linksContainer = document.getElementById('modal-links');
      linksContainer.innerHTML = '';

      modalData[id].links.map((link, index) => {
        linksContainer.innerHTML += `<a href=${link.value} target="_blank" class="modal__website">${link.label}</a>`;
      });
    };
  }

  // When the user clicks on <span> (x), close the modal
  modalClose.onclick = function () {
    modal.style.display = 'none';
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };
};

window.addEventListener('load', function init() {
  showMenu('nav-toggle', 'nav-menu');

  const navLink = document.querySelectorAll('.nav__link');
  navLink.forEach(n => n.addEventListener('click', linkAction));
  navIndicatorOnScroll();

  darkMode();
  scrollTop();

  modal();
});
