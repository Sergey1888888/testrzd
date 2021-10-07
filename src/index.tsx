import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createGlobalStyle} from "styled-components";
import 'semantic-ui-css/semantic.min.css'
import App from './App';
import {store} from "./store";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    font-size: 16px;  
  }
  
  body {
    font-family: 'Lato', sans-serif;
  }
  
  @media screen and (max-width: 1550px){
    html {
      font-size: 12px;
    }
  }
  
  @media screen and (max-width: 1115px){
    html {
      font-size: 10px;
    }
  }
`
// @ts-ignore
window.store = store;
ReactDOM.render(
    <Provider store={store}>
        <GlobalStyle/>
        <App/>
    </Provider>,
    document.getElementById('root')
);