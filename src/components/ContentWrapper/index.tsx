import { ReactChild } from 'react';

import Header from '../Header';
import './index.css';

interface ContentWrapperProps {
	children: ReactChild;
}

function ContentWrapper({ children }: ContentWrapperProps) {
	return (
		<div className="content-wrapper">
			<Header />
			<div className="content-container">{children}</div>
		</div>
	);
}

export default ContentWrapper;
