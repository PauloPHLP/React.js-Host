import { useNavigate } from 'react-router-dom';
import './index.css';

function Header() {
	const navigate = useNavigate();

	const handleOnClick = (route) => {
		navigate(route);
	};

	return (
		<div className="header-container">
			<div className="tabs">
				<button className="tab-button main" onClick={() => handleOnClick('/')}>
					Main App
				</button>
				<button
					className="tab-button blue"
					onClick={() => handleOnClick('/blue')}
				>
					Blue App
				</button>
			</div>
		</div>
	);
}

export default Header;
