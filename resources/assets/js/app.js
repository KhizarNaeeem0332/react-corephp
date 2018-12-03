window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';

ReactDOM.render( < Main / > , document.getElementById('bin-app'));