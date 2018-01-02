import React from 'react';

class Contact extends React.Component {
	constructor(props) {
	    super(props);
	    this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		// const wall = document.querySelector('.msgLines');
		// if (wall) {
		// 	wall.scrollTop = wall.scrollHeight;
		// }
		
		this.props.onClick(this.props.indexNumber);
	}

	render() {
		return (
			<div className="Contact" onClick={this.handleClick}>
				<p>Contact {this.props.indexNumber + 1}</p>
			</div>
		)
	}
};

export default Contact