import React, { Component } from 'react';

export default class App extends Component {
	constructor(){
		super();
		let rating = new Array(6).fill(false); rating[0] = null;

		this.state = {
			initialRating: rating,
			rating: rating,
			clickState: 0
		}
		this.handleHover = this.handleHover.bind(this);
		this.handleOut = this.handleOut.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	// componentDidUpdate() {
	// 	let num = this.state.ratingc;
	// 	let newArray = [null];
	// 	for(let i=1; i <= 5; i++) {
	// 		if (i<=num) {
	// 			newArray[i] = true;
	// 		}
	// 		else {
	// 			newArray[i] = false;
	// 		}
	// 	}
	// 	this.setState({ ratingh: newArray });
	// 	this.forceUpdate();
	// }

	handleHover(event) {
		console.log('event: ', event.target);
		let num = event.target.dataset.rating;
		// this.setState({ rating: num+1});
		let newArray = [null];
		for(let i=1; i <= 5; i++) {
			if (i<=num) {
				newArray[i] = true;
			}
			else {
				newArray[i] = false;
			}
		}
		this.setState({ rating: newArray });
		this.forceUpdate();
	}

	handleOut() {
		let newArray = this.state.initialRating;
		console.log('newArray in handleOut: ', newArray);
		this.setState({ rating: newArray }); //this needs to be modified for click, check click state
		this.forceUpdate();
	}

	handleClick(event) {
		this.setState({ clickState: event.target.dataset.rating })
	}

	//add a click function

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

		console.log('listItems: ', listItems);


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
