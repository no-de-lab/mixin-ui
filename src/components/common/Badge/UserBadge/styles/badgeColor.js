const colorBreakPoints = {
  white: `
        color: #8e8e8e;
    `,
  red: `
        color: #e57373;;
    `,
  blue: `
        color: #aab6fe;
  `,
  green: `
        color: #a5d6a7;
  `,
  gold: `
        color: #ca9b52;
  `,
};

export const badgeColor = (key) => {
  return colorBreakPoints[key];
};
