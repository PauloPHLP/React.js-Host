import { RouteObject } from 'react-router';

import Home from '.';

export const homeRoutes: RouteObject[] = [
	{
		path: '/',
		element: <Home />,
	},
];
