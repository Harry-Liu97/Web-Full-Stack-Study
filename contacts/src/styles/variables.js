const sizes = {
  miniMobile: 320,
  smallMobile: 414,
  mobile: 576,
  tablet: 768,
  laptop: 1024,
  largeLaptop: 1440,
  desktop: 1920,
  largeDesktop: 2560,
  wideScreen: 3840,
};

export const devices = {
  miniMobile: `(min-width: ${sizes.miniMobile}px)`,
  smallMobile: `(min-width: ${sizes.smallMobile}px)`,
  mobile: `(min-width: ${sizes.mobile}px)`,
  tablet: `(min-width: ${sizes.tablet}px)`,
  laptop: `(min-width: ${sizes.laptop}px)`,
  largeLaptop: `(min-width: ${sizes.largeLaptop}px)`,
  desktop: `(min-width: ${sizes.desktop}px)`,
};
