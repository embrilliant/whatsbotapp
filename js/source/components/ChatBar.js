import React from 'react';

class ChatBar extends React.Component {
	constructor(props) {
	    super(props);

	    this.handleSubmit = this.handleSubmit.bind(this);
	    this.handleChange = this.handleChange.bind(this);
	    
	    this.state = {
	    	value: ''
	    }
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.onChatBarSubmit(this.state.value);
		this.setState({value: ''});
	}

	handleChange(e) {
		this.setState({value: e.target.value});
	}

	render() {
		return (
			<div className="ChatBar">
				<form onSubmit={this.handleSubmit}>
					<input type="text" name="text" value={this.state.value} onChange={this.handleChange} />
					<input type="submit" name="submit" value="SEND" />
				</form>
      		</div>
		)
	}
};

export default ChatBar