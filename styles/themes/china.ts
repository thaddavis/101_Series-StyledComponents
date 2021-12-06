import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    primary: "red",
    secondary: "yellow",
    tertiary: "black",
    quaternary: "white",
  },
  text: {
    fontFamily:
      "Output Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
    colors: {
      primary: "white",
      secondary: "#7b8ca0",
      tertiary: "#b6c0c2",
    },
    fontSizes: ["12px", "14px", "16px", "20px", "24px", "32px"],
  },
  margins: {
    asNumbers: [0.5, 1, 1.5, 2, 2.5, 3],
    asEms: ["0.5em", "1em", "1.5em", "2em", "2.5em", "3em"],
  },
  paddings: {
    asNumbers: [0.5, 1, 1.5, 2, 2.5, 3],
    asEms: ["0.5em", "1em", "1.5em", "2em", "2.5em", "3em"],
  },
  // length: {
  //   asEms: ["0.5em", "1em", "1.5em", "2em", "2.5em", "3em"],
  // }
  breakpoints: {
    sm: "40em",
    md: "52em",
    lg: "64em",
    xl: "80em",
  },
};
