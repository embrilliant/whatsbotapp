import React from 'react';

class Contact extends React.Component {
	constructor(props) {
	    super(props);
	    this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.onClick(this.props.indexNumber);
	}

	render() {
		return (
			<div className="contact" onClick={this.handleClick}>
				<p className="name">Contact {this.props.indexNumber + 1}</p>
				<img className="photo" src="images/avatar.png" />
			</div>
		)
	}
};

export default Contact