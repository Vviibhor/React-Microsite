import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import 'jquery/dist/jquery.min';
import 'owl.carousel/dist/owl.carousel.min'


import Popper from 'popper.js';
import 'aos/dist/aos.css';
import 'aos/dist/aos';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './assets/fonts/Proxima-Nova/ProximaNovaSoft-Medium.otf';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
