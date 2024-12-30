import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Caviar Dreams';
    src: url('./assets/fonts/CaviarDreams.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    margin: 0;
    font-family: 'Caviar Dreams', sans-serif;
    background-color: #121212;
    color: #fff;
  }
`;
