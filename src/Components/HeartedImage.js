import React from "react";

import "../styles/HeartedImage.css";

const HeartedImage = props => {
	return (
		<div className="image-container">
			<span
				className="image-container__hearth glyphicon glyphicon-heart"
				aria-hidden="true"
			/>
			<img className="image-container__img" src={props.imageKey} alt="" />
		</div>
	);
};

export default HeartedImage;
