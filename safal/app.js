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
    end: () => '+=' + document.querySelector('.panel').offsetHeight*3.2,
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
    title.textContent = 'Amphibian Decline';
    desc.textContent ="Since the mid-1900s, a strange flesh-eating fungus has spread across the world, infecting hundreds of different species of amphibians and condemning more species to extinction than any other pathogen ever recorded. This deadly disease descended into a global pandemic that has already wiped out over 90 species and caused declines in at least 501 frog and salamander species.";
  },
  width: '16ch',
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
    title.textContent = 'Chytridiomycosis';
    desc.textContent ="Chytridiomycosis is caused by the chytrid fungi Batrachochytrium dendrobatidis and Batrachochytrium salamandrivorans,a fungus-Batrachochytrium dendrobatidis-that eats the skin of frogs, toads, and other amphibians alive. Bd unspools the skin's proteins and feasts on the resulting spaghetti of amino acids. As it does, infected animals grow lethargic, shedding their skin in a death spiral and eventually die of a heart attack";
  },
  width: '14ch',
  ease: 'power1.out',
  scrollTrigger: {
    trigger: '.left-panel-2',
    start: 'top top', // the default values
    duration: 2,
    toggleActions: 'restart none restart reset',
    // markers: true,
  },
});
//3
gsap.to('.text-panel-title', {
  onStart: () => {
    title.textContent = "It's not just amphibians";
    desc.textContent =
      "Fungal diseases have been affecting bats with white-nose syndrome disease (WSN) disrupting the animal's hibernation and leaving millions dead in its path. Besides being major components of many food webs, these animals consume insects equating to hundreds of billions of dollars worth of pesticides and help reduce the spread of disease like malaria.";
  },
  //this width depends on the characters in the title
  width: '18.5ch',
  ease: 'power1.out',
  scrollTrigger: {
    trigger: '.left-panel-3',
    start:() => '+=' + document.querySelector('.panel').offsetHeight , // the default values
    duration: 1,
    toggleActions: 'restart none restart restart',
    //markers: true,
  },
});
//4
gsap.to('.text-panel-title', {
  onStart: () => {
    title.textContent = "Globalization and Trade";
    desc.textContent =
      "The fungus spread with travel in the form of trade. However, testing at ports has been impossible since results are quite latent and expensive. In the wild, after capturing the animal, swabbing follows with the analysis done with either PCR or qPCR which but getting results takes 'ages'. Once confirmed, finding the patient again is impossible. Besides, wet lab procedures are riddled with complex steps that only trained personnel can engage with.";
  },
  //this width depends on the characters in the title
  width: '19.5ch',
  ease: 'power1.out',
  scrollTrigger: {
    trigger: '.left-panel-4',
    start: () => '+=' + document.querySelector('.panel').offsetHeight*2, // the default values
    duration: 1,
    toggleActions: 'restart none restart restart',
    //markers: true,
  },
});
// text animation end//

tl2.addLabel('first', 0);
tl2.addLabel('second', 1);
tl2.addLabel('third',2);
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

  .fromTo('.background-3', { yPercent: -100, y: 0 }, { yPercent: 0 }, 'second')

 .fromTo('.right-panel-4', { xPercent: -100, x: 0 }, { xPercent: 0 }, 'third')

  .fromTo('.background-7', { xPercent: 100, x: 0 }, { xPercent: 0 }, 'third')

  .fromTo('.left-panel-4', { yPercent: 100, y: 0 }, { yPercent: 0 }, 'third')

  .fromTo('.background-4', { yPercent: -100, y: 0 }, { yPercent: 0 }, 'third');

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





// Second shuffling cards section



let tl4 = gsap.timeline({
  // onStart: () => {
  //   document.querySelector('.text-panel-title').style.opacity = '1';
  //   document.querySelector('.text-panel-title').classList.add('text-animate');
  // },
  scrollTrigger: {
    trigger: '.second-panel',
    start: 'top top',
    // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
    end: () => '+=' + document.querySelector('.second-panel').offsetHeight*2.2,
    scrub: 0.4,
    pin: true,
    // anticipatePin: 1,
  },
  defaults: { ease: 'none' },
});

//text animation
const title_2 = document.querySelector('.second-text-panel-title');
const desc_2 = document.querySelector('.second-text-panel-description');
//1
gsap.to('.second-text-panel-title', {
  onStart: () => {
    title_2.textContent = 'Fungal Diagnostics';
    //desc_2.textContent ="Swab an animal at the point of capture/care";
  },
  width: '16ch',
  ease: 'power1.out',
  scrollTrigger: {
    trigger: '.second-panel',
    start: 'top top', // the default values
    duration: 1,
    toggleActions: 'restart none restart reset',
  },
});
gsap.from('.second-text-panel-description', {
  opacity: 0,
  y: 15,
  ease: 'power1.out',
  scrollTrigger: {
    trigger: '.second-panel',
    start: 'top top', // the default values
    duration: 1,
    toggleActions: 'restart none restart reset',
  },
});
//2
gsap.to('.second-text-panel-description', {
  onStart: () => {
      li=document.getElementById("cards-li-2")
      li.style.opacity=1
    //desc_2.textContent ="Swab an animal at the point of capture/care<br>Insert the swabbed specimen to our device";
  },
  //width: '14ch',
  ease: 'power1.out',
  scrollTrigger: {
    trigger: '.second-left-panel-2',
    start: 'top top', // the default values
    duration: 2,
    toggleActions: 'restart none restart reset',
    // markers: true,
  },
});
//3
gsap.to('.second-text-panel-description', {
  onStart: () => {
    //desc_2.textContent ="Swab an animal at the point of capture/care<br>Insert the swabbed specimen to our device<br>Receive the result back in 30-60 minutes";
       li=document.getElementById("cards-li-3")
      li.style.opacity=1
  },
  //this width depends on the characters in the title
  //width: '18.5ch',
  ease: 'power1.out',
  scrollTrigger: {
    trigger: '.second-left-panel-3',
    start:() => '+=' + document.querySelector('.panel').offsetHeight , // the default values
    duration: 1,
    toggleActions: 'restart none restart restart',
    //markers: true,
  },
});
// text animation end//

tl4.addLabel('first', 0);
tl4.addLabel('second', 1);
// animate the container one way...
tl4
  .fromTo('.second-right-panel-2', { xPercent: -100, x: 0 }, { xPercent: 0 }, 'first')
  // ...and the image the opposite way (at the same time)
  .fromTo('.second-background-5', { xPercent: 100, x: 0 }, { xPercent: 0 }, 'first')

  .fromTo('.second-left-panel-2', { yPercent: 100, y: 0 }, { yPercent: 0 }, 'first')

  .fromTo('.second-background-2', { yPercent: -100, y: 0 }, { yPercent: 0 }, 'first')

  .fromTo('.second-right-panel-3', { xPercent: -100, x: 0 }, { xPercent: 0 }, 'second')

  .fromTo('.second-background-6', { xPercent: 100, x: 0 }, { xPercent: 0 }, 'second')

  .fromTo('.second-left-panel-3', { yPercent: 100, y: 0 }, { yPercent: 0 }, 'second')

  .fromTo('.second-background-3', { yPercent: -100, y: 0 }, { yPercent: 0 }, 'second');

