// gsap.registerPlugin(ScrollTrigger);

//initial text animations for staggering animation on load
// this whole timeline is for the text and the button
const tl = gsap.timeline();
tl.from('.main-text', {
  y: 40,
  opacity: 0,
  duration: 2,
  ease: 'power4.out',
  delay: 0.5,
  stagger: {
    amount: 0.5,
  },
});
tl.from(
  '.down-icon',
  { scale: 0, duration: 0.4, opacity: 0, ease: 'back' },
  '-=1.2'
);

//this tween is for the background animation
gsap.to('.cover', {
  opacity: 1,
  ease: 'power1.out',
  scrollTrigger: {
    trigger: '.placeholder',
    start: 'top bottom', // the default values
    end: 'top 20%',
    scrub: 0.5,
  },
});

///////////////////////////////////////////////////////
//this is where the parallax animations starts

//this tween is to give the opacity animation for all texts at once
gsap.to('.main-text-container', {
  opacity: 0,
  ease: 'power1.out',
  scrollTrigger: {
    trigger: '.placeholder',
    start: 'top bottom', // the default values
    end: 'top 25%',
    scrub: 1,
  },
});

//these four animations are done separately to give the parallax effect
gsap.to('.logo', {
  yPercent: -500,
  ease: 'power1.out',
  scrollTrigger: {
    trigger: '.placeholder',
    start: 'top bottom', // the default values
    end: 'top top',
    scrub: 1,
  },
});
gsap.to('.title-text', {
  yPercent: -200,
  ease: 'power1.out',
  scrollTrigger: {
    trigger: '.placeholder',
    start: 'top bottom', // the default values
    end: 'top top',
    scrub: 1,
  },
});
gsap.to('.title-description', {
  yPercent: -180,
  ease: 'power1.out',
  scrollTrigger: {
    trigger: '.placeholder',
    start: 'top bottom', // the default values
    end: 'top top',
    scrub: 1,
  },
});
gsap.to('.title-button', {
  yPercent: -150,
  ease: 'power1.out',
  scrollTrigger: {
    trigger: '.placeholder',
    start: 'top bottom', // the default values
    end: 'top top',
    scrub: 1,
  },
});
///////////////////////////////////////////////////////

let tl2 = gsap.timeline({
  // onStart: () => {
  //   document.querySelector('.text-panel-title').style.opacity = '1';
  //   document.querySelector('.text-panel-title').classList.add('text-animate');
  // },
  scrollTrigger: {
    trigger: '.panel',
    start: 'top top',
    // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
    end: () => '+=' + document.querySelector('.panel').offsetHeight * 2,
    scrub: 0.4,
    pin: true,
    // anticipatePin: 1,
  },
  defaults: { ease: 'none' },
});

//text animation
const title = document.querySelector('.text-panel-title');
const desc = document.querySelector('.text-panel-description');
//1
gsap.to('.text-panel-title', {
  onStart: () => {
    title.textContent = 'Dumbledore';
    desc.textContent =
      'Dubmledore is the headmaster of Hogwarts school. He has a pet phoenix.';
  },
  width: '10ch',
  ease: 'power1.out',
  scrollTrigger: {
    trigger: '.panel',
    start: 'top top', // the default values
    duration: 1,
    toggleActions: 'restart none restart reset',
  },
});
gsap.from('.text-panel-description', {
  opacity: 0,
  y: 15,
  ease: 'power1.out',
  scrollTrigger: {
    trigger: '.panel',
    start: 'top top', // the default values
    duration: 1,
    toggleActions: 'restart none restart reset',
  },
});
//2
gsap.to('.text-panel-title', {
  onStart: () => {
    title.textContent = 'McGonogall';
    desc.textContent =
      'McGonogall is the head of the Transfiguaration department. Very cool';
  },
  width: '10ch',
  ease: 'power1.out',
  scrollTrigger: {
    trigger: '.left-panel-2',
    start: 'top top', // the default values
    duration: 1,
    toggleActions: 'restart none restart reset',
    // markers: true,
  },
});
//3
gsap.to('.text-panel-title', {
  onStart: () => {
    title.textContent = 'Severus Snape';
    desc.textContent =
      'Head of the potions department. The best man in Hogwarts';
  },
  //this width depends on the characters in the title
  width: '13ch',
  ease: 'power1.out',
  scrollTrigger: {
    trigger: '.left-panel-3',
    start: () => '+=' + document.querySelector('.panel').offsetHeight, // the default values
    duration: 1,
    toggleActions: 'restart none restart restart',
    markers: true,
  },
});
// text animation end//

tl2.addLabel('first', 0);
tl2.addLabel('second', 1);
// animate the container one way...
tl2
  .fromTo('.right-panel-2', { xPercent: -100, x: 0 }, { xPercent: 0 }, 'first')
  // ...and the image the opposite way (at the same time)
  .fromTo('.background-5', { xPercent: 100, x: 0 }, { xPercent: 0 }, 'first')

  .fromTo('.left-panel-2', { yPercent: 100, y: 0 }, { yPercent: 0 }, 'first')

  .fromTo('.background-2', { yPercent: -100, y: 0 }, { yPercent: 0 }, 'first')

  .fromTo('.right-panel-3', { xPercent: -100, x: 0 }, { xPercent: 0 }, 'second')

  .fromTo('.background-6', { xPercent: 100, x: 0 }, { xPercent: 0 }, 'second')

  .fromTo('.left-panel-3', { yPercent: 100, y: 0 }, { yPercent: 0 }, 'second')

  .fromTo('.background-3', { yPercent: -100, y: 0 }, { yPercent: 0 }, 'second');

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: '.slider-background',
    start: 'top top',
    end: () => '+=' + document.querySelector('.slider-background').offsetHeight,
    scrub: 0.4,
    pin: true,
    anticipatePin: 1,
  },
});

tl3
  .fromTo(
    '.slider-background-container',
    { xPercent: 0, x: 0 },
    { xPercent: -100 }
  )
  .fromTo(
    '.slider-background-image',
    { xPercent: 0, x: 0 },
    { xPercent: 50 },
    0
  );
