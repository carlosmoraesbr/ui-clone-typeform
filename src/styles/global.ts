import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Advent+Pro:wght@100;200;300;400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Advent Pro', sans-serif;
    -webkit-font-smoothing: antialiased;
    line-height: 1.2;
    color: rgb(38, 38, 39);
    background-color: rgb(255, 255, 255);
  }
`;
