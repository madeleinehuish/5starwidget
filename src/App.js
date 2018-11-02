import React, { Component } from 'react';

export default class App extends Component {
	constructor(){
		super();
		let rating = new Array(6).fill(false); rating[0] = null;

		this.state = {
			initialRating: rating,
			rating: rating,
			clickState: 0,
			hoverState: 0
		}
		this.handleHover = this.handleHover.bind(this);
		this.handleOut = this.handleOut.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	update() {
		let currentRating = 0;
		if(this.state.clickState >= this.state.hoverState) {
			currentRating = this.state.clickState;
		} else {
			currentRating = this.state.hoverState;
		}
		let newArray = [null];
		for(let i=1; i <= 5; i++) {
			if (i<=currentRating) {
				newArray[i] = true;
			}
			else {
				newArray[i] = false;
			}
		}
		this.setState({ rating: newArray });
		this.forceUpdate();
	}

	handleHover(event) {
		this.setState({ hoverState: event.target.dataset.rating });
		this.update();
	}

	handleOut() {
		this.setState({ hoverState: 0 });
		this.update();
	}

	handleClick(event) {
		this.setState({ clickState: event.target.dataset.rating });
		this.update();
	}

	render () {
		console.log('this.state.initialRating: ', this.state.initialRating);

		const listItems = this.state.rating.map((item, index) => {
			if(index !== 0) {
				return (
                 <li
                    data-rating={index}
                    className={this.state.rating[index]===true ? 'yellow' : 'grey'}
                    onMouseEnter={this.handleHover}
                    onMouseLeave={this.handleOut}
                    onClick={this.handleClick}
                 >*</li>
				)
			}
		})

		// console.log('listItems: ', listItems);


		return (
			<div id="container">
				<div id="starContainer">
					<ul id="starList">
						{listItems}
					</ul>
				</div>
			</div>
		)
	}
}
