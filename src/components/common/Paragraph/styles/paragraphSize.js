const sizeBreakPoints = {
  small: `
            font-size: 0.875rem;
      `,
  medium: `
            line-height:1.54;
            font-size: 0.8125rem;
      `,
  large: `
            line-height:1.53;
            font-size: 1.125rem;
            font-weight: bold;
      `,
};

export const paragraphSize = (key) => {
  return sizeBreakPoints[key];
};
