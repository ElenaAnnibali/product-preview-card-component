import './index.css';
/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Global
      styles={css`
        body {
          margin: 0;
          font-family: 'Montserrat', Georgia, serif;
          color: #6c7289;
          background-color: #f2ebe3;
          font-size: 14px;
        }
        *,
        ::before,
        ::after {
          box-sizing: border-box;
        }
        .otherFont {
          font-family: 'Fraunces', Georgia, serif;
          color: #000;
          font-weight: 700;
          font-size: 32px;
          line-height: 30px;
        }
      `}
    />
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
