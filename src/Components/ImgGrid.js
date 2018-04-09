import React from "react";

import "../styles/ImgGrid.css";

const ImgGrid = props => {
	let { images, numRows } = props;

	let imagesByRows = spreadInRows(images, numRows).map((row, index) => {
		return (
			<div
				key={`col_${index}`}
				className="img-grid__container__scroll-wrapper__col"
			>
				{row}
			</div>
		);
	});

	return (
		<div className="row img-grid">
			<div className="img-grid__container">
				<div className="img-grid__container__scroll-wrapper">
					{imagesByRows}
				</div>
			</div>
		</div>
	);
};

function spreadInRows(components, rowCount) {
	let fromIndex = 0;
	let toIndex = Math.ceil(components.length / rowCount);
	let splittedArray = [];

	for (let r = 0; r < rowCount; r++) {
		splittedArray.push(components.slice(fromIndex, toIndex));
		fromIndex = toIndex;
		toIndex += toIndex;
	}

	return splittedArray;
}

export default ImgGrid;
