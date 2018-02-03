import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';

const app = $("#app").get(0);

ReactDOM.render(<App />, app);
registerServiceWorker();
