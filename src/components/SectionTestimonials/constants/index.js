export const END_POINT = 'https://www.jurele.lt/testimonials.json';

export const SLIDER_SETTINGS = {
  breakpoints: {
    0: {
      spaceBetween: 20,
      slidesPerView: 1,
    },
    576: {
      spaceBetween: 30,
      slidesPerView: 2,
    },
    1024: {
      spaceBetween: 60,
      slidesPerView: 3,
    },
  },
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  touchEventsTarget: 'container',
  grabCursor: true,
};

export const TESTIMONIALS_STARS = [
  { x: '3%', y: '30%' },
  { x: '25%', y: '0%' },
  { x: '45%', y: '15%' },
  { x: '57%', y: '30%' },
  { x: '75%', y: '5%' },
  { x: '90%', y: '25%' },
];
