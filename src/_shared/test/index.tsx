import React, { Suspense } from 'react';
import { createMemoryHistory, MemoryHistory } from 'history';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

type Params = {
	routes?: string[];
	history?: MemoryHistory;
};

export function renderWithWrappers(
	ui: React.ReactElement,
	{
		routes = ['/'],
		history = createMemoryHistory({ initialEntries: routes }),
	}: Params = {} as Params
) {
	const Wrapper = ({ children }: any) => (
		<Suspense fallback="Loading...">
			<MemoryRouter initialEntries={routes}>{children}</MemoryRouter>
		</Suspense>
	);
	return {
		...render(ui, { wrapper: Wrapper }),
		history,
	};
}
