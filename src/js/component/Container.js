import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import { Jumbotron } from "./Jumbotron.js";
import { AllCards } from "./AllCards.js";

export const Container = () => {
	return (
		<div>
			<Jumbotron />
			<div className="card-group">
				<AllCards />
			</div>
		</div>
	);
};
