/* eslint-disable react/prop-types */

// export default Container;

function Container(props) {
	const { className, children } = props;
	return (
		<div className={`max-w-5xl w-full flex mx-auto ${className}`}>
			{children}
		</div>
	);
}

export default Container;
