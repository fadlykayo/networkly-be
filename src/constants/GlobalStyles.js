import { createGlobalStyle } from 'styled-components';

import Fonts from './Fonts';
import Sizes from './Sizes';

export default createGlobalStyle`
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
    font-family: ${ Fonts.poppinsRegular };
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  .p-0 {
    padding: 0 !important;
  }

  @media ${ Sizes.pixels.md }{
    .md-p-0 {
      padding: 0 !important;
    }
  }
`;