import Glide from '@glidejs/glide';
import { elements } from './base';
import breakpoints from './breakpoints';
import * as formValidator from './formValidator';

// Create sliders

const teamGlide = new Glide('.glide--team-members', {
   type: 'carousel',
   startAt: 0,
   perView: 3,
   gap: 16,
   breakpoints: {
      [breakpoints.medium - 1]: { perView: 1 },
      [breakpoints.large - 1]: { perView: 2 },
   },
   keyboard: false,
});

teamGlide.mount();

const offersGlide = new Glide('.glide--offers', {
   type: 'carousel',
   startAt: 0,
   perView: 1,
   autoplay: 5000,
   hoverpause: true,
   keyboard: false,
   animationTimingFunc: 'ease-in-out',
});

offersGlide.mount();

// Form validation

elements.callbackTimeInput.addEventListener('change', e => {
   formValidator.validateSelectOptions(e.target);
});

elements.officeAddressInput.addEventListener('change', e => {
   formValidator.validateSelectOptions(e.target);
});

elements.firstNameInput.addEventListener('blur', e => {
   formValidator.validateName(e.target);
});

elements.phoneInput.addEventListener('blur', e => {
   formValidator.validatePhoneNumber(e.target);
});

elements.submitBtn.addEventListener('click', e => {
   e.preventDefault();
   formValidator.validateName(elements.firstNameInput);
   formValidator.validatePhoneNumber(elements.phoneInput);
   formValidator.validateSelectOptions(elements.callbackTimeInput);
   formValidator.validateSelectOptions(elements.officeAddressInput);
});
