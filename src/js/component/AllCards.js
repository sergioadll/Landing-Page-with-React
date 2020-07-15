import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import { Jumbotron } from "./Jumbotron.js";

export const AllCards = props => {
	return (
		<div className="card m-5">
			<img
				alt="Card image cap"
				className="card-img-top"
				src={props.imageUrl}
			/>
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.description}</p>
				<a href={props.buttonUrl} className="btn btn-primary">
					{props.buttonLabel}
				</a>
			</div>
		</div>
	);
};

AllCards.propTypes = {
	title: PropType.string,
	imageUrl: PropType.string,
	description: PropType.string,
	buttonUrl: PropType.string,
	buttonLabel: PropType.string
};
