import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import { Autos } from './Autos';
import reportWebVitals from './reportWebVitals';
import { MainApp } from './components/autopage/MainApp';
import './styles/style.scss';
ReactDOM.render(
  <React.StrictMode>
  <MainApp/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
