import React from 'react';

const LoadingSpinner = () => {
	return (
		<div className="d-flex justify-content-center m-5">
			<div className="spinner-border" role="status">
				<span className="sr-only">Loading...</span>
			</div>
		</div>
	);
};

export default LoadingSpinner;
