import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import { Jumbotron } from "./Jumbotron.js";
import { AllCards } from "./AllCards.js";

export const Container = () => {
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-9 mx-auto">
					<Jumbotron />
					<div className="card-group">
						<AllCards
							title="This is a Mock-up"
							image="https://ginva.com/wp-content/uploads/2019/03/img_5c8253bc98dd3-500x325.png"
							description=""
							buttonLable="Standard Button"
							buttonUrl="https://www.freemockupworld.com/wp-content/uploads/2019/10/xEngraved-Wood-PSD-Mockup-500x325.jpg.pagespeed.ic.B6S3CLTE_j.jpg"
						/>
						<AllCards
							title="This is a Mock-up"
							image="https://www.freemockupworld.com/wp-content/uploads/2019/10/xEngraved-Wood-PSD-Mockup-500x325.jpg.pagespeed.ic.B6S3CLTE_j.jpg"
							description=""
							buttonLable="Standard Button"
							buttonUrl="https://www.freemockupworld.com/wp-content/uploads/2019/10/xEngraved-Wood-PSD-Mockup-500x325.jpg.pagespeed.ic.B6S3CLTE_j.jpg"
						/>
						<AllCards
							title="This is a Mock-up"
							image="https://ginva.com/wp-content/uploads/2017/02/ginva_2017-02-28_06-21-29-1-500x325.jpg"
							description=""
							buttonLable="Standard Button"
							buttonUrl="https://www.freemockupworld.com/wp-content/uploads/2019/10/xEngraved-Wood-PSD-Mockup-500x325.jpg.pagespeed.ic.B6S3CLTE_j.jpg"
						/>
						<AllCards
							title="This is a Mock-up"
							image="https://ginva.com/wp-content/uploads/2017/02/ginva_2017-02-28_06-21-27-500x325.jpg"
							description=""
							buttonLable="Standard Button"
							buttonUrl="https://www.freemockupworld.com/wp-content/uploads/2019/10/xEngraved-Wood-PSD-Mockup-500x325.jpg.pagespeed.ic.B6S3CLTE_j.jpg"
						/>
						<AllCards
							title="This is a Mock-up"
							image="https://ginva.com/wp-content/uploads/2017/08/img_5989c0ec45503-500x325.png"
							description=""
							buttonLable="Standard Button"
							buttonUrl="https://www.freemockupworld.com/wp-content/uploads/2019/10/xEngraved-Wood-PSD-Mockup-500x325.jpg.pagespeed.ic.B6S3CLTE_j.jpg"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
