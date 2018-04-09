import React from "react";
import FilterDropdownMenu from "./FilterDropdownMenu";

import "../styles/FilterSelection.css";

const FilterSelection = props => {
	let { styles, standards } = props.filtersApplied;
	let { onStyleRemove, onStandardRemove } = props.onFilterRemoveHandlers;

	let styleAppliedElements = styles.map(style => {
		return (
			<Filter
				key={`style_filter_${style.id}`}
				filter={style}
				onRemove={onStyleRemove}
			/>
		);
	});

	let standardAppliedElements = standards.map(standard => {
		return (
			<Filter
				key={`standard_filter_${standard.id}`}
				filter={standard}
				onRemove={onStandardRemove}
			/>
		);
	});

	return (
		<div className="filter-container">
			<FilterDropdownMenu {...props} />

			<div className="filter-container__applied-filters">
				{styleAppliedElements}
				{standardAppliedElements}
			</div>
		</div>
	);
};

const Filter = props => {
	return (
		<div className="filter-container__applied-filters__filter">
			<div className="filter-container__applied-filters__filter__label">
				{props.filter.label}
			</div>

			<div
				className="filter-container__applied-filters__filter__icon"
				onClick={() => props.onRemove(props.filter)}
			>
				<span className="glyphicon glyphicon-remove" />
			</div>
		</div>
	);
};

export default FilterSelection;
