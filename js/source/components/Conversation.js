import React from 'react';
import ChatWall from './ChatWall';
import ChatBar from './ChatBar';
import Robot from './Robot';

class Conversation extends React.Component {
	constructor(props) {
	    super(props);
	    this.handleChatBarSubmit = this.handleChatBarSubmit.bind(this);

	    const walls = [];
	    const senders = [];

	    for (let i = 0; i < this.props.contacts; i++ ) {
	      walls.push([]);
	      senders.push([]);
	    }

	    this.state = {
	    	walls: walls,
	    	senders: senders
	    }

	    this._timeout = null;
	}

	handleChatBarSubmit(value) {
		this.setState((prevState, props) => {
				prevState.walls[props.index].push(value);
				prevState.senders[props.index].push('user');
		
				return this.state;
			}
		)

		clearTimeout(this._timeout);
		this.addBotMsg = this.addBotMsg.bind(this);
		this._timeout = setTimeout(this.addBotMsg, 350);
	}

	addBotMsg() {
		let index = this.props.index
		let msgLines = this.state.walls[index];
		let bot = new Robot();
		let botMsg = bot.getResponse(msgLines[msgLines.length - 1]);
		
		this.setState((prevState) => {
				prevState.walls[index].push(botMsg);
				prevState.senders[index].push('bot');
		
				return this.state;
			}
		)
  	}

	render() {
	    const index = this.props.index;
	    let content = null;
	    if (this.props.index !== '') {
	      content = [
						<ChatWall key={index} index={index} wall={this.state.walls[index]} senders={this.state.senders[index]}/>, 
						<ChatBar key="chatBar" onChatBarSubmit={this.handleChatBarSubmit}/>
					];
	    } else {
	      content = "Click a contact.";
	    }
		
		return (
			<section className="conversation">
				{content}
      		</section>
		)
	}
};

export default Conversation