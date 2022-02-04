import React, { useEffect } from 'react';

function MicroFrontend({ name, host }) {
	useEffect(() => {
		const scriptId = `micro-frontend-script-${name}`;

		const mountMicroFrontend = () => {
			window[`mount${name}`](`${name}-root`);
		};

		const unmountMicroFrontend = () => {
			window[`unmount${name}`] && window[`unmount${name}`](`${name}-root`);
		};

		if (document.getElementById(scriptId)) {
			unmountMicroFrontend();
			mountMicroFrontend();

			return;
		}

		fetch(`${host}/asset-manifest.json`)
			.then((res) => res.json())
			.then((manifest) => {
				const script = document.createElement('script');

				script.id = scriptId;
				script.crossOrigin = '';
				script.src = `${host}${manifest.files['main.js']}`;

				script.onload = () => {
					mountMicroFrontend();
				};

				document.head.appendChild(script);
			});

		return () => {
			window[`unmount${name}`] && window[`unmount${name}`](`${name}-root`);
		};
	});

	return <main id={`${name}-root`} />;
}

MicroFrontend.defaultProps = {
	document,
	window,
};

export default MicroFrontend;
