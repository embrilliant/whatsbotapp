import React from 'react';
import ContactList from './ContactList';
import Conversation from './Conversation';

class Container extends React.Component {
	constructor(props) {
	    super(props);
	    this.handleContactClick = this.handleContactClick.bind(this);
	    this.state = {
	    	numOfContacts: 5,
	    	index: ''
	    }
	}

	handleContactClick(index) {
		this.setState({index});
	}

	render() {
		return (
			<div className="container">
				<ContactList onContactClick={this.handleContactClick} contacts={this.state.numOfContacts} />
				<Conversation index={this.state.index} contacts={this.state.numOfContacts} />
			</div>
		)
	}
};

export default Container