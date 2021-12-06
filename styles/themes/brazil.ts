import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    primary: "green",
    secondary: "yellow",
    tertiary: "blue",
    quaternary: "white",
  },
  text: {
    fontFamily:
      "Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
    colors: {
      primary: "white",
      secondary: "blue",
      tertiary: "silver",
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
  breakpoints: {
    sm: "40em",
    md: "52em",
    lg: "64em",
    xl: "80em",
  },
};
