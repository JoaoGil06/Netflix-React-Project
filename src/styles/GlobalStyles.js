import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    min-height: 100%;
  }
  body {
    background-color: #111; 
    font-family: 'Open Sans', sans-serif;
  }

  ul {
    list-style: none;
  }

`;
