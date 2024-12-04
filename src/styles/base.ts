"use client";

import { createGlobalStyle } from "styled-components";
import { colors, fonts, fontSizes } from "./variables";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'PKMN R';
    src: url('/fonts/pkmn_r.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${fonts.base};
    font-size: ${fontSizes.base};
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: 0.5px;
    background-color: ${colors.lightBlue};
    color: ${colors.black};
  }

  a {
    text-decoration: none;
  }

  ul, ol {
    list-style: none;
  }
`;
