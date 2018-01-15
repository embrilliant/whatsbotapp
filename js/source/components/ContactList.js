import React from 'react';
import Contact from './Contact';

class ContactList extends React.Component {
	constructor(props) {
	    super(props);
	    this.handleClick = this.handleClick.bind(this);
	}

	handleClick(index) {
		this.props.onContactClick(index);
	}

	render() {
		var contacts = [];
	    for (let i = 0; i < this.props.contacts; i++ ) {
	      contacts.push(<Contact key={i} indexNumber={i} onClick={this.handleClick} />);
	    }
		
		return (
			<section className="contact-list">
				{contacts}
      		</section>
		)
	}
};

export default ContactList