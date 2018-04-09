"use strict";

import React, { Component } from "react";
import ImgCarousel from "./ImgCarousel";
import FilterSelection from "./FilterSelection";

import data from "../data.json";
import "../styles/App.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { styleFilters: [], standardFilters: [] };
	}

	onStyleFilterSelectedHandler(style) {
		this.setState({ styleFilters: [...this.state.styleFilters, style] });
	}

	onStandardFilterSelectedHandler(standard) {
		this.setState({
			standardFilters: [...this.state.standardFilters, standard]
		});
	}

	onStyleFilterRemoveHandler(style) {
		let newStyleFilters = this.state.styleFilters;

		newStyleFilters.splice(
			newStyleFilters.findIndex(i => i.id === style.id),
			1
		);

		this.setState({ styleFilters: newStyleFilters });
	}

	onStandardFilterRemoveHandler(standard) {
		let newStandardFilters = this.state.standardFilters;

		newStandardFilters.splice(
			newStandardFilters.findIndex(i => i.id === standard.id),
			1
		);

		this.setState({ standardFilters: newStandardFilters });
	}

	render() {
		return (
			<div className="page-container">
				<FilterSelection
					data={data}
					filtersApplied={{
						styles: this.state.styleFilters,
						standards: this.state.standardFilters
					}}
					onFilterClickHandlers={{
						onStyleSelected: this.onStyleFilterSelectedHandler.bind(this),
						onStandardSelected: this.onStandardFilterSelectedHandler.bind(this)
					}}
					onFilterRemoveHandlers={{
						onStyleRemove: this.onStyleFilterRemoveHandler.bind(this),
						onStandardRemove: this.onStandardFilterRemoveHandler.bind(this)
					}}
				/>
				<ImgCarousel
					data={data.data}
					filters={{
						styleFilters: this.state.styleFilters,
						standardFilters: this.state.standardFilters
					}}
				/>
			</div>
		);
	}
}

export default App;
