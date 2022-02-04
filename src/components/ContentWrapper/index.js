import Header from '../Header';
import './index.css';

function ContentWrapper({ children }) {
	return (
		<div className="content-wrapper">
			<Header />
			<div className="content-container">{children}</div>
		</div>
	);
}

export default ContentWrapper;
