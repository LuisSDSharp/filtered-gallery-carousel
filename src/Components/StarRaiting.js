import React from "react";

import "../styles/StarRaiting.css";

const StarRaiting = props => {
	let { score, maxStars } = props;
	let starElements = [];

	for (let i = 0; i < maxStars; i++) {
		let elementClass = `glyphicon glyphicon-star stars-container__star ${
			i + 1 > score ? "stars-container__star--outline" : ""
		}`;
		starElements.push(<div key={`star_icon_${i}`} className={elementClass} />);
	}

	return <div className="stars-container">{starElements}</div>;
};

export default StarRaiting;
