import React, { Component } from 'react';

export default class App extends Component {
	constructor(){
		super();
		let ratinghover = new Array(6).fill(false); ratinghover[0] = null;
		let ratingclick = new Array(6).fill(false); ratingclick[0] = null;

		this.state = {
			rating: 0,
			// clickState: 0,
			// hoverState: 0,
			initialRating: ratinghover,
			ratingh: ratinghover,
			ratingc: ratingclick
		}
		this.handleHover = this.handleHover.bind(this);
		this.handleOut = this.handleOut.bind(this);
	}


	handleHover(event) {
		console.log('event: ', event.target);
		let num = event.target.dataset.rating;
		this.setState({ rating: num+1});
		let newArray = [null];
		for(let i=1; i <= 5; i++) {
			if (i<=num) {
				newArray[i] = true;
			}
			else {
				newArray[i] = false;
			}
		}
		this.setState({ ratingh: newArray });
		this.forceUpdate();
	}

	handleOut() {
		let newArray = this.state.initialRating;
		console.log('newArray in handleOut: ', newArray);
		this.setState({ ratingh: newArray });
		this.forceUpdate();
	}

	//add a click function

	render () {
		console.log('this.state.initialRating: ', this.state.initialRating);
		return (
			<div id="container">
				<div id="starContainer">
					<ul id="starList">
						<li data-rating='1' className={this.state.ratingh[1]===true ? 'yellow' : 'grey'} onMouseEnter={this.handleHover} onMouseLeave={this.handleOut}>*</li>
						<li data-rating='2' className={this.state.ratingh[2]===true ? 'yellow' : 'grey'} onMouseEnter={this.handleHover} onMouseLeave={this.handleOut}>*</li>
						<li data-rating='3' className={this.state.ratingh[3]===true ? 'yellow' : 'grey'} onMouseEnter={this.handleHover} onMouseLeave={this.handleOut}>*</li>
						<li data-rating='4' className={this.state.ratingh[4]===true ? 'yellow' : 'grey'} onMouseEnter={this.handleHover} onMouseLeave={this.handleOut}>*</li>
						<li data-rating='5' className={this.state.ratingh[5]===true ? 'yellow' : 'grey'} onMouseEnter={this.handleHover} onMouseLeave={this.handleOut}>*</li>
					</ul>
				</div>
	</div>
		)
	}
}
