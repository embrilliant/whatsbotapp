import React from 'react';
import ChatWall from './ChatWall';
import ChatBar from './ChatBar';
import Robot from './Robot';
// import axios from 'axios';

class Conversation extends React.Component {
	constructor(props) {
	    super(props);
	    this.handleChatBarSubmit = this.handleChatBarSubmit.bind(this);

	    const walls = [];
	    const senders = [];
	    const memories = [];

	    for (let i = 0; i < this.props.contacts; i++ ) {
	      walls.push([]);
	      senders.push([]);
	      memories.push([]);
	    }

	    this.state = {
	    	walls,
	    	senders,
	    	memories
	    }

	    this._timeout = null;
	}

	handleChatBarSubmit(value) {
		this.setState((prevState, props) => {
				prevState.walls[props.index].push(value);
				prevState.senders[props.index].push('user');
				prevState.memories[props.index].push(value);
		
				return this.state;
			}
		)

		clearTimeout(this._timeout);
		this.addBotMsg = this.addBotMsg.bind(this);
		this._timeout = setTimeout(this.addBotMsg, 350);
	}

	addBotMsg() {
		const index = this.props.index
		const msgLines = this.state.walls[index];
		const bot = new Robot();
		const hasMsgsInMemory = this.state.memories[index].length > 0;
		const answerToChange = "Right.";

		let botMsg = bot.getResponse(msgLines[msgLines.length - 1]);

		if (botMsg === answerToChange && hasMsgsInMemory) {
			let ran = Math.floor((Math.random() * (this.state.memories[index].length)));
			botMsg = this.state.memories[index][ran].replace('?', ' then ?');
		}
		
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
	      content = <h1>Click a contact.</h1>;
	    }
		
		return (
			<section className="conversation">
				{content}
      		</section>
		)
	}
};

export default Conversation