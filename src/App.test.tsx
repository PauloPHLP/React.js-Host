import App from './App';

import { renderWithWrappers } from './_shared/test';

describe('App', () => {
	test('Renders App without crashing', () => {
		const { container } = renderWithWrappers(<App />);

		expect(container).toBeTruthy();
	});
});
