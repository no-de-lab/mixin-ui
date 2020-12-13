const zIndex = {
  header: 100,
};

export const mediaBreakPoints = {
  mobile: 680,
  tablet: 768,
  laptopS: 1024,
  laptopM: 1366,
  laptopL: 1440,
  desktopS: 1920,
  desktopL: 2560,
};

const media = (key) => {
  return (style) =>
    `@media (max-width: ${mediaBreakPoints[key]}px) { ${style} }`;
};

const css = {
  zIndex,
  mediaBreakPoints,
  media,
};

export default css;
