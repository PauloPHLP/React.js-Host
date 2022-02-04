import { useRoutes } from 'react-router-dom';
import React from 'react';

import { appRoutes } from './app.routes';

function App() {
	const routing = useRoutes(appRoutes);

	return <>{routing}</>;
}

export default App;
