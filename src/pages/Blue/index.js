import MicroFrontend from '../../MicroFrontend';
import ContentWrapper from '../../components/ContentWrapper';
import './index.css';

const { REACT_APP_BLUE_HOST: blueHost } = process.env;

function Blue() {
	return (
		<ContentWrapper>
			<MicroFrontend host={blueHost} name="Blue" />
		</ContentWrapper>
	);
}

export default Blue;
