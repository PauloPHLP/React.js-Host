import { renderWithWrappers } from '../../_shared/test';
import Header from '.';

describe('Header', () => {
	test('Renders Header without crashing', () => {
		const { container } = renderWithWrappers(<Header />);

		expect(container).toBeTruthy();
	});

	test('Renders all three buttons on the list', () => {
		const { getByText } = renderWithWrappers(<Header />);

		expect(getByText('Main App')).toBeInTheDocument();
		expect(getByText('Blue App')).toBeInTheDocument();
		expect(getByText('Red App')).toBeInTheDocument();
	});
});
