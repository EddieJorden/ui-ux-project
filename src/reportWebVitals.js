/* eslint-disable comma-dangle */
/* eslint-disable object-curly-newline */
const reportWebVitals = (onPerfEntry) => {
	if (onPerfEntry && onPerfEntry instanceof Function) {
		import('web-vitals').then(
			({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
				getCLS(onPerfEntry);
				getFID(onPerfEntry);
				getFCP(onPerfEntry);
				getLCP(onPerfEntry);
				getTTFB(onPerfEntry);
			}
		);
	}
};

export default reportWebVitals;
