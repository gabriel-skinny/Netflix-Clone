import { createGlobalStyle } from "styled-components"

export default createGlobalStyle `
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #fff;
  }

  body{
    background: #141414;
    font-family: 'Martel Sans', sans-serif;
  }

  ul{
    list-style: none;
    display: flex;
  }
`;