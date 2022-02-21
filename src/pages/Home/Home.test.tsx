import { renderWithWrappers } from '../../_shared/test';
import Home from '.';

describe('Home', () => {
	test('Renders Home without crashing and with the correct properties', () => {
		const { container, getByText } = renderWithWrappers(<Home />);

		expect(container).toBeTruthy();
		expect(getByText('React.js')).toBeInTheDocument();
		expect(getByText('Welcome to the Main app!')).toBeInTheDocument();
		expect(
			getByText('Please, select another app to interact')
		).toBeInTheDocument();
	});
});
