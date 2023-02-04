// stitches.config.ts
import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      gray400: "gainsboro",
      gray500: "lightgray",
      aquaWhite: "#F7F7F7",
      blue400: "#6278F7",
      programacao: "#57C278",
      frontEnd: "#82CFFA",
      dataScience: "#A6D157",
      devops: "#E06B69",
      ux: "#DB6EBF",
      mobile: "#FFBA05",
      inovacao: "#FF8A29",
    },

    fonts: {
      Poppins: '"Poppins", "sans-serif"',
      Inter: '"Inter", "sans-serif";',
      Roboto: '"Roboto", "sans-serif"',
    },
  },
  media: {
    bp1: "(min-width: 480px)",
  },
  utils: {
    marginX: (value) => ({ marginLeft: value, marginRight: value }),
  },
});
