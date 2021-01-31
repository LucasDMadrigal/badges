import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';
import App from './components/App';
import BadgeNew from './pages/BadgeNew';
import Badges from './pages/Badges';

const container = document.getElementById('app');
// ReactDOM.render(_que_, _donde_);
ReactDOM.render(< App />, container);
