import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export const Jumbotron = () => {
	return (
		<div className="jumbotron p-md-n0">
			<h1 className="display-4">Hello, world!</h1>
			<p className="lead">
				This is a simple hero unit, a simple jumbotron-style component
				for calling extra attention to featured content or information.
			</p>
			<a className="btn btn-primary btn-lg" href="#" role="button">
				Learn more
			</a>
		</div>
	);
};
