import { useNavigate } from 'react-router-dom';
import './index.css';

function Header() {
	const navigate = useNavigate();

	const handleOnClick = (route: string) => {
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
				<button
					className="tab-button red"
					onClick={() => handleOnClick('/red')}
				>
					Red App
				</button>
			</div>
		</div>
	);
}

export default Header;
