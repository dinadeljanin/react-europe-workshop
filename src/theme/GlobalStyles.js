import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    position: relative;
    font-family: 'Quicksand', sans-serif;
    > #root {
      overflow: scroll;
      position: relative;
      height: 100vh;
      width: 100vw;
      display: grid;
      grid-template-columns: auto;
      grid-template-rows: 80px auto 80px;
      gap: 0px 0px;
      grid-template-areas:
        "header"
        "main"
        "footer";
    }
  }

  header {
    align-items: center;
    display: flex;
    align-self: start;
    grid-area: header;
    flex-direction: row;
    height: 80px;
    justify-content: space-between;
    width: 100%;
    padding: 0 2em;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border-bottom: 2px solid #000;
    background-color: #FFE3E3;
  }

  footer {
    background-color: #FFE3E3;
    height: 80px;
    border-top: 2px solid #000;
    grid-area: footer;
    width: 100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    padding: 0 2em;
    align-items: center;
    > img {
      height: 20px;
      width: auto;
    }
  }

  main {
    grid-area: main;
    height: 100%;
    width: 75vw;
    justify-self: center;
    display: grid;
  }

  h1, h2, h3, h4, h5, h6 {
    color: #000;
    margin: 0;
  }

  h1 { font-size: 2rem; }

  h2 {font-size: 1.602rem;}

  h3 {font-size: 1.3rem;}

  h4 {font-size: 1.266rem;}

  h5 {font-size: 1.125rem;}

  p {
    padding: 0;
    color: #000;
    margin: 0;
  }

  a {
    color: #000;
    text-decoration: none;
  }

  form {
    height: fit-content;
    width: 300px;
    justify-self: center;
    align-self: center;
    padding-bottom: 2em;
    border: 3px solid #000;
  }

  legend {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: .25em 0 .5em;
  }

  fieldset {
    border: none;
    margin: 0;
    padding: 0;
    &:disabled {
      user-select: none;
    }
  }

  button {
    padding: 0.75em 1em;
    border-radius: 25px;
    color: #fff;
    width: fit-content;
    height: fit-content;
    font-family: 'Quicksand', sans-serif;
    font-weight: 600;
    background-color: #000;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    border: none;
    font-size: 1em;
    &:disabled {
      cursor: not-allowed;
      user-select: none;
    }
  }

  label {
    display: flex;
    flex-direction: column;
    padding: 0.25em 0 0;
    margin-top: 0.5em;
    position: relative;
    color: hsla(60, 36%, 96%, 0.6);
  }

  input {
    border: none;
    outline: none;
    margin: 0;
    padding: 0;
    font-family: 'Quicksand', sans-serif;
    font-size: 1.25em;
    font-weight: 600;
    line-height: 1.25em;
    transition: 0.2s;
    color: #000;
    &:disabled { cursor: not-allowed; user-select: none; }
    margin-top: 0.15em;
    padding-top: .05em;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }

  input[type=number] { -moz-appearance: textfield; }

  input[type="date"]::-webkit-calendar-picker-indicator {
    margin-right: 5px;
    margin-top: 3px;
  }

  input[type="submit"] {
    // border: 2px solid #000;
    background-color: #000;
    font-family: 'Quicksand', sans-serif;
    font-weight: 600;
    text-align: center;
    padding: 0.65em 1em;
    height: fit-content;
    color: #fff;
    display: block;
    margin: 1.25em auto 0;
    border-radius: 25px;
    cursor: pointer;
  }
`;

export default GlobalStyles;
