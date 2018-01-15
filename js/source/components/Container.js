import React from 'react';
import ContactList from './ContactList';
import Conversation from './Conversation';

class Container extends React.Component {
	constructor(props) {
	    super(props);
	    this.handleContactClick = this.handleContactClick.bind(this);
	    this.state = {
	    	contacts: 5,
	    	index: ''
	    }
	}

	handleContactClick(index) {
		this.setState({index: index});
	}

	render() {
		return (
			<div className="container">
				<ContactList onContactClick={this.handleContactClick} contacts={this.state.contacts} />
				<Conversation index={this.state.index} contacts={this.state.contacts} />
			</div>
		)
	}
};

export default Container