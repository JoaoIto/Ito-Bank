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
      shadowLightGrey: "#cacaca",
      lightGrey: "#E9E8E8",
      darkGrey: "#434242",
      lightBlack: "#20262E",
      aquaWhite: "#F5F5F5",
      aquaGrey: "#E8E2E2",
      blue400: "#6278F7",
    },

    fonts: {
      Poppins: '"Poppins", "sans-serif"',
      Inter: '"Inter", "sans-serif";',
      Roboto: '"Roboto", "sans-serif"',
      Noto: "'Noto Serif Ahom', 'serif'",
    },
  },
  media: {
    bp1: "(min-width: 480px)",
  },
  utils: {
    marginX: (value) => ({ marginLeft: value, marginRight: value }),
  },
});
