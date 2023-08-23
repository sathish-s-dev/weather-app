/* eslint-disable react/prop-types */

// export default Container;

function Container({ children }) {
	return (
		<div className='max-w-5xl w-full flex flex-col mx-auto'>{children}</div>
	);
}

export default Container;
