export const getRandomLightColor = () => {
  const letters = "BCDEF".split("");
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
};

export const getDarkColorFrom = (hexColor: string, darkenByPercent: number) => {
  // validate hexColor string
  hexColor = String(hexColor).replace(/[^0-9a-f]/gi, "");
  if (hexColor.length < 6) {
    hexColor = hexColor[0] + hexColor[0] + hexColor[1] + hexColor[1] + hexColor[2] + hexColor[2];
  }
  darkenByPercent = darkenByPercent || 0;

  // convert to decimal and change luminosity
  let rgb = "#",
    c,
    i;
  for (i = 0; i < 3; i++) {
    c = parseInt(hexColor.substring(i * 2, 2), 16);
    c = Math.round(Math.min(Math.max(0, c + c * darkenByPercent), 255)).toString(16);
    rgb += ("00" + c).substring(c.length);
  }

  return rgb;
};
