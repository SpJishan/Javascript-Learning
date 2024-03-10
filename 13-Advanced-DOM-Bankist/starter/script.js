'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////////////////////////////////////////////////////
// Smooth Scrolling
///////////////////////////////////////////////////////////////////////////////////////

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  // section1.scrollIntoView({ behavior: 'smooth' });
});

///////////////////////////////////////////////////////////////////////////////////////
//  Event Delegation Implementing Page Navigation
///////////////////////////////////////////////////////////////////////////////////////

// Event deligation from child element, best way to use it from parent elements.
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

//Best way:
// 1. Add event listener to common parent elements

document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log(e.target);
  if (e.target.classList.contains('.nav_link')) {
    // // 2. Determine what element originated the event
    const id = this.getAttribute('href');

    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

///////////////////////////////////////////////////////////////////////////////////////
// Building a Tabbed Component
///////////////////////////////////////////////////////////////////////////////////////

// 1. Storing html elements

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

// 2. Applying Event Deligation to the parent element
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab'); //3. We cannot use only e.target because if we clicked on (not the tabbed area but on) number it will call upon the span element. -> We can use e.target.parentElement, on number click we would get the parent element of span that is .operations__tab. But on click on tab area we would get operations__tab's parent element. That is operations__tab-container. So we will use e.target.closest()
  console.log(clicked);

  // 4. Guard Clause - If someone clicked outside of a tab area
  if (!clicked) return;

  // 5. Removing Active class to select other tabs
  tabs.forEach(t => t.classList.remove('operations__content--active'));
  // 8. Removing Active content to seect other content
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // 6. Adding Active class upon clicked-Activate Tab
  clicked.classList.add('operations__tab--active');

  // 7. Activating the content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

///////////////////////////////////////////////////////////////////////////////////////
// Passing Arguments to Event Handlers
///////////////////////////////////////////////////////////////////////////////////////

const nav = document.querySelector('.nav');

const handleHover = function (e, opacity) {
  const link = e.target;
  if (link.classList.contains('nav__link')) {
    // Note: while calling classlist we need to write only the name in the quotation without
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    // siblings.forEach(el => {
    //   if (el !== link) el.style.opacity = opacity;
    // });
    // logo.style.opacity = opacity;

    // Defining this keyword , otherwise for bind method, it will select '.nav'
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// nav.addEventListener('mouseover', function (e) {
//   handleHover(e, 0.5);
// });

// nav.addEventListener('mouseout', function (e) {
//   handleHover(e, 1);
// });

// ->New ways to pass argument with bind method

nav.addEventListener('mouseover', handleHover.bind(0.5)); // 1. Adding event listener to the parent element: nav
nav.addEventListener('mouseout', handleHover.bind(1));

///////////////////////////////////////////////////////////////////////////////////////
// Selecting, Creating, and Deleting Elements
///////////////////////////////////////////////////////////////////////////////////////

// // Selecting elements
// console.log(document.documentElement); // 1. to select overal html
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector('.header');
// const allSections = document.querySelectorAll('.section');
// console.log(allSections);

// document.getElementById('section--1');
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

// console.log(document.getElementsByClassName('btn'));

// // Creating and inserting elements
// const message = document.createElement('div');
// message.classList.add('cookie-message'); // 2. Added a classlist from css
// // message.textContent = 'We use cookied for improved functionality and analytics.';
// message.innerHTML =
//   'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message);
// // header.append(message);
// // header.append(message.cloneNode(true));

// // header.before(message);
// // header.after(message);

// // Delete elements
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
//     // message.parentElement.removeChild(message);
//   });

///////////////////////////////////////////////////////////////////////////////////////
// Styles, Attributes and Classes
///////////////////////////////////////////////////////////////////////////////////////

// // Styles
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// console.log(message.style.color);
// console.log(message.style.backgroundColor);

// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height); //For undefined style we use

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered'); //  Custom property for CSS

// // Attributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.className);

// logo.alt = 'Beautiful minimalist logo';

// // Non-standard
// console.log(logo.designer);
// console.log(logo.getAttribute('designer')); // To use a custom attributes we need to use getAttribute. designer-not a default attributes(src, alt)
// logo.setAttribute('company', 'Bankist');

// console.log(logo.src);
// console.log(logo.getAttribute('src'));

// const link = document.querySelector('.nav__link--btn');
// console.log(link.href);
// console.log(link.getAttribute('href'));

// // Data attributes
// console.log(logo.dataset.versionNumber); // remember the naming convention between html and js

// // Classes
// logo.classList.add('c', 'j');
// logo.classList.remove('c', 'j');
// logo.classList.toggle('c');
// logo.classList.contains('c'); // not includes

///////////////////////////////////////////////////////////////////////////////////////
// Types of Events and Event Handlers
///////////////////////////////////////////////////////////////////////////////////////

// const h1 = document.querySelector('h1');

// const alertH1 = function (e) {
//   alert('addEventListener: Great! You are reading the heading :D');
// };

// h1.addEventListener('mouseenter', alertH1);

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// // h1.onmouseenter = function (e) {
// //   alert('onmouseenter: Great! You are reading the heading :D');
// // };

///////////////////////////////////////////////////////////////////////////////////////
// Event Propagation in Practice
///////////////////////////////////////////////////////////////////////////////////////

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) { //bubble
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget);
//   console.log(e.currentTarget === this);

//   // Stop propagation
//   // e.stopPropagation();
// });
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER', e.target, e.currentTarget);
// });
// document.querySelector('.nav').addEventListener('click', function (e) {//target
//   this.style.backgroundColor = randomColor();
//   console.log('NAV', e.target, e.currentTarget);
// });

///////////////////////////////////////////////////////////////////////////////////////
// DOM Traversing
///////////////////////////////////////////////////////////////////////////////////////

// const h1 = document.querySelector('h1');

// // Going downwards: child
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered';

// // Going upwards: parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-secondary)';

// h1.closest('h1').style.background = 'var(--gradient-primary)';

// // Going sideways: siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// });

///////////////////////////////////////
// Sticky navigation-Basics
const initialCoords = section1.getBoundingClientRect();
console.log(initialCoords);

window.addEventListener('scroll', function () {
  console.log(window.scrollY);

  if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});