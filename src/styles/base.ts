"use client";

import { createGlobalStyle } from "styled-components";
import { colors, fonts, fontSizes } from "./variables";

export const GlobalStyle = createGlobalStyle`
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
