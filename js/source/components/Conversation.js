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
		const userMsg = msgLines[msgLines.length - 1];

		const botMsg = this.getBotMsg(userMsg, 1);
		
		this.setState((prevState) => {
				prevState.walls[index].push(botMsg);
				prevState.senders[index].push('bot');

				return this.state;
			}
		);
  	}

  	getBotMsg(userMsg, time) {
  		const index = this.props.index;
  		const bot = new Robot();
		const hasMsgsInMemory = this.state.memories[index].length > 0;
		const answerToChange = "Right.";
		const wall = this.state.walls[index];
		const repUserMsg = "gibberish";

		let botMsg = bot.getResponse(userMsg);

		if (botMsg === answerToChange && hasMsgsInMemory) {
			let ran = Math.floor((Math.random() * (this.state.memories[index].length)));
			botMsg = this.state.memories[index][ran].replace('?', ' then?');
		}

		if (time === 3) {
			return this.getBotMsg(repUserMsg, 1);
		} else {
			let isMsgRecentlyRepeated = (botMsg === wall[wall.length - 2] || botMsg === wall[wall.length - 4]);

			return isMsgRecentlyRepeated ? this.getBotMsg(userMsg, time + 1) : botMsg;
		}
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