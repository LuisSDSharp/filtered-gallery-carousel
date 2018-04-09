import React from "react";
import StarRaiting from "./StarRaiting";

import "../styles/FilterDropdownMenu.css";

const FilterDropdownMenu = props => {
	let { onStyleSelected, onStandardSelected } = props.onFilterClickHandlers;

	const styles = Object.values(props.data.designStyle).map(style => {
		return (
			<div
				key={`style_menu_${style.id}`}
				className="menu-container__menu__item__filter"
				onClick={() => onStyleSelected(style)}
			>
				{style.label}
			</div>
		);
	});

	const standards = Object.values(props.data.qualityStandard).map(
		(standard, index) => {
			return (
				<div
					key={`standard_menu_${standard.id}`}
					className="menu-container__menu__item__filter menu-container__menu__item__filter--stars"
					onClick={() => onStandardSelected(standard)}
				>
					<StarRaiting
						key={`star_${index}`}
						score={Number(standard.label.charAt(0))}
						maxStars={5}
					/>
				</div>
			);
		}
	);

	return (
		<div className="dropdown menu-container">
			<div
				className="dropdown-toggle menu-container__toggler"
				id="dropdownMenu1"
				data-toggle="dropdown"
				aria-haspopup="true"
				aria-expanded="true"
			/>
			<div className="dropdown-menu" aria-labelledby="dropdownMenu1">
				<div className="menu-container__menu">
					<div className="menu-container__menu__item menu-container__menu__item--grey">
						<div className="menu-container__menu__item__title">Style</div>

						{styles}
					</div>

					<div className="menu-container__menu__item">
						<div className="menu-container__menu__item__title">Quiality</div>

						{standards}
					</div>
				</div>
			</div>
		</div>
	);
};

export default FilterDropdownMenu;
