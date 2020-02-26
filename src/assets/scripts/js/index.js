import Glide from '@glidejs/glide';
import breakpoints from './breakpoints';

const glide = new Glide('.glide', {
   type: 'carousel',
   startAt: 0,
   perView: 3,
   gap: 16,
   breakpoints: {
      [breakpoints.medium - 1]: { perView: 1 },
      [breakpoints.large - 1]: { perView: 2 },
   },
});

glide.mount();
