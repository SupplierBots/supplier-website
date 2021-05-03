import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    pink: string;
    violet: string;
    lightPurple: string;
    primaryBackground: string;
    secondaryBackground: string;
    tertiaryBackground: string;
    darkGrey: string;
    lightGrey: string;
    redDanger: string;

    mainGradientLR: string;
    mainGradientTB: string;
    mainGradient45: string;

    primaryBoxShadow: string;
    sidebarBoxShadow: string;

    fontSmall: string;
    fontMedium: string;
    fontRegular: string;
    fontBig: string;
    fontLarge: string;
    fontHeading: string;
  }
}
