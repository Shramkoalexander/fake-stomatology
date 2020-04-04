const breakpointCSS = window.getComputedStyle(
   document.querySelector('.breakpoints')
);

function getBreakpoint(bpTitle) {
   const rawValue = breakpointCSS.getPropertyValue(`--${bpTitle}`);
   const value = parseInt(rawValue, 10);
   return value;
}

const breakpoints = {
   XXSmall: getBreakpoint('XXSmall') || 320,
   XSmall: getBreakpoint('XSmall') || 480,
   small: getBreakpoint('small') || 600,
   medium: getBreakpoint('medium') || 768,
   large: getBreakpoint('large') || 992,
   XLarge: getBreakpoint('XLarge') || 1200,
};

export default breakpoints;
