import MicroFrontend from '../../MicroFrontend';
import ContentWrapper from '../../components/ContentWrapper';
import './index.css';

const { REACT_APP_RED_HOST: redHost } = process.env;

function Red() {
	return (
		<ContentWrapper>
			<MicroFrontend host={redHost || ''} name="Red" />
		</ContentWrapper>
	);
}

export default Red;
