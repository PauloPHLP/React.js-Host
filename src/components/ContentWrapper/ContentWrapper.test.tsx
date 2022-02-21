import { renderWithWrappers } from '../../_shared/test';
import ContentWrapper from '.';

describe('ContentWrapper', () => {
	test('Renders ContentWrapper without crashing and with the correct properties and header', () => {
		const { container, getByText } = renderWithWrappers(
			<ContentWrapper>
				<div>Content Wrapper</div>
			</ContentWrapper>
		);

		expect(container).toBeTruthy();
		expect(getByText('Content Wrapper')).toBeInTheDocument();
		expect(getByText('Main App')).toBeInTheDocument();
		expect(getByText('Blue App')).toBeInTheDocument();
		expect(getByText('Red App')).toBeInTheDocument();
	});
});
