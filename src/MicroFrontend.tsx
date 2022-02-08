import { useEffect } from 'react';

interface MicroFrontendProps {
	name: string;
	host: string;
}

function MicroFrontend({ name, host }: MicroFrontendProps) {
	useEffect(() => {
		const scriptId = `micro-frontend-script-${name}`;

		const runWindowMethod = (methodName: string, param: string) => {
			try {
				const windowMethod = (window as { [key: string]: any })[
					methodName
				] as Function;

				windowMethod(param);
			} catch (error) {
				console.error(error);
			}
		};

		const mountMicroFrontend = () => {
			runWindowMethod(`mount${name}`, `${name}-root`);
		};

		const unmountMicroFrontend = () => {
			runWindowMethod(`unmount${name}`, `${name}-root`);
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
			unmountMicroFrontend();
		};
	});

	return <main id={`${name}-root`} />;
}

MicroFrontend.defaultProps = {
	document,
	window,
};

export default MicroFrontend;
