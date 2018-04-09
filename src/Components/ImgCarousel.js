import React from "react";
import ImgGrid from "./ImgGrid";
import HeartedImage from "./HeartedImage";

import "../styles/ImgCarousel.css";

const NUM_ROWS = 3;
const NUM_COLUMNS = 3;
const MOVE_PAGE_OFFSET = 100;

const ImgCarousel = props => {
	let items = Object.values(props.data);
	let { styleFilters, standardFilters } = props.filters;

	let images = items
		.map(item => {
			if (isStyleFilterApplied(item.metaData.designStyle, styleFilters)) {
				if (
					isStandardFilterApplied(
						item.metaData.qualityStandard,
						standardFilters
					)
				) {
					return (
						<HeartedImage
							key={`image_${item["_id"]}`}
							imageKey={item.imageKey}
						/>
					);
				}
			}
		})
		.filter(img => !(img === undefined));

	let pagesCount = Math.ceil(Math.ceil(images.length / NUM_ROWS) / NUM_COLUMNS);
	let currentPage = 0;

	const scrollLeft = () => {
		currentPage -= 1;

		if (currentPage < 0) currentPage = pagesCount - 1;

		$(".img-grid__container__scroll-wrapper").css({
			transform: `translateX(calc(-90% * ${currentPage}))`
		});
	};

	const scrollRight = () => {
		currentPage += 1;

		if (currentPage === pagesCount) currentPage = 0;

		$(".img-grid__container__scroll-wrapper").css({
			transform: `translateX(calc(-90% * ${currentPage}))`
		});
	};

	return (
		<div className="img-carousel">
			<div className="img-carousel__left-arrow">
				<span
					className="glyphicon glyphicon-chevron-left img-carousel__left-arrow__icon"
					onClick={() => scrollLeft()}
				/>
			</div>
			<ImgGrid images={images} numRows={NUM_ROWS} />
			<div className="img-carousel__right-arrow">
				<span
					className="glyphicon glyphicon-chevron-right img-carousel__left-arrow__icon"
					onClick={() => scrollRight()}
				/>
			</div>
		</div>
	);
};

function isStyleFilterApplied(itemStyles, styleFilters) {
	return styleFilters.length < 1 || isFilterApplied(itemStyles, styleFilters);
}

function isStandardFilterApplied(itemStandards, standardFilters) {
	return (
		standardFilters.length < 1 ||
		isFilterApplied(itemStandards, standardFilters)
	);
}

function isFilterApplied(itemFilters, filters) {
	let filtered = false;

	itemFilters.forEach(styleId => {
		if (filters.find(filter => styleId === filter.id)) {
			filtered = true;
		}
	});

	return filtered;
}

export default ImgCarousel;
