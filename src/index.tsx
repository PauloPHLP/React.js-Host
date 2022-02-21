import ReactDOM from 'react-dom';
import React from 'react';

import CustomRouter from 'customRouter';
import history from './_shared/history';
import App from './App';
import './index.css';

ReactDOM.render(
	<React.StrictMode>
		<CustomRouter history={history}>
			<App />
		</CustomRouter>
	</React.StrictMode>,
	document.getElementById('host-root')
);
