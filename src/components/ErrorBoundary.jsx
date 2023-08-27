/* eslint-disable react/prop-types */
import { Component } from 'react';

export default class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
	}
	componentDidCatch(error) {
		console.log(error.message);
	}
	render() {
		return <div>{this.props.children}</div>;
	}
}
