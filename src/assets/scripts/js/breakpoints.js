const breakpointCSS = window.getComputedStyle(
   document.querySelector('.breakpoints')
);

function getBreakpoint(bpTitle) {
   const rawValue = breakpointCSS.getPropertyValue(`--${bpTitle}`);
   if (!rawValue) {
      console.error(`can't find ${bpTitle} breakpoint`);
      return undefined;
   }

   const value = parseInt(rawValue, 10);
   return value;
}

const breakpoints = {
   XXSmall: getBreakpoint('XXSmall'),
   XSmall: getBreakpoint('XSmall'),
   small: getBreakpoint('small'),
   medium: getBreakpoint('medium'),
   large: getBreakpoint('large'),
   XLarge: getBreakpoint('XLarge'),
};

export default breakpoints;
