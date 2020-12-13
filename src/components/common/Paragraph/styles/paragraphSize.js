const sizeBreakPoints = {
  small: `
            font-size: 0.875rem;
      `,
  medium: `
            font-size: 0.8125rem;
      `,
  large: `
            font-size: 1.125rem;
            font-weight: bold;
      `,
};

export const paragraphSize = (key) => {
  return sizeBreakPoints[key];
};
