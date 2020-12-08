import './base/polyfills';
import Glide from '@glidejs/glide';
import breakpoints from './base/breakpoints';
import CallbackModal from './modal-modules/CallbackModal';
import BookAppointmentForm from './form-modules/BookAppointmentForm';
import MapBlock from './map-modules/MapBlock';
import FooterToggle from './FooterToggle';
import HidingHeader from './HidingHeader';
import MobileNav from './MobileNav';
import MenuDropdown from './MenuDropdown';
import ScrollToTop from './ScrollToTop';
import SmoothScrollHandler from './SmoothScrollHandler';

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
const mapBlock = new MapBlock();
const footerToggle = new FooterToggle();
const smoothScroll = new SmoothScrollHandler();
const scrollToTop = new ScrollToTop();
const hidingHeader = new HidingHeader();
const menuDropdown = new MenuDropdown();
const mobileNav = new MobileNav();
