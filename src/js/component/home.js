import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
//create your first component
import { Navbar } from "./Navbar.js";
import { Container } from "./Container.js";
import { Footer } from "./Footer.js";

export function Home() {
	return (
		<div>
			<Navbar />
			<Container />
			<Footer />
		</div>
	);
}
