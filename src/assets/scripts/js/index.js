import Glide from '@glidejs/glide';
import { elements } from './base';
import breakpoints from './breakpoints';
import CallbackModal from './CallbackModal';
import BookAppointmentForm from './BookAppointmentForm';
import MapBlock from './MapBlock';
import FooterToggle from './FooterToggle';
import MenuDropdown from './MenuDropdown';
import ScrollToTop from './ScrollToTop';

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

const bookAppointmentForm = new BookAppointmentForm();
const callbackModal = new CallbackModal('callback-modal');

elements.callbackButtonsAll.forEach(button => {
   button.addEventListener('click', () => {
      callbackModal.open();
   });
});

const mapBlock = new MapBlock();
const footerToggle = new FooterToggle();
const scrollToTop = new ScrollToTop();
const menuDropdown = new MenuDropdown();
