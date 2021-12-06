import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      quaternary: string;
    };
    text: {
      fontFamily: string;

      colors: {
        primary: string;
        secondary: string;
        tertiary: string;
      };
      fontSizes: string[];
    };
    margins: {
      asNumbers: number[];
      asEms: string[];
    };
    paddings: {
      asNumbers: number[];
      asEms: string[];
    };
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  }
}
