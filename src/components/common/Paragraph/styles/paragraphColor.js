const colorBreakPoints = {
  white: `
        color: #dcdcdc;
    `,
  gray: `
        color: #616161;
    `,
  dark: `
        color: black;
    `,
};

export const paragraphColor = (key) => {
  return colorBreakPoints[key];
};
