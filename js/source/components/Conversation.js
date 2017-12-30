import React from 'react';
import ChatWall from './ChatWall';
import ChatBar from './ChatBar';
import Robot from './Robot';

class Conversation extends React.Component {
	constructor(props) {
	    super(props);
	    this.handleChatBarSubmit = this.handleChatBarSubmit.bind(this);

	    const walls = [];
	    for (let i = 0; i < this.props.contacts; i++ ) {
	      walls.push([]);
	    }

	    this.state = {
	    	walls: walls
	    }

	    this._timeout = null;
	}

	handleChatBarSubmit(value) {
		this.setState((prevState, props) => {
				prevState.walls[props.index].push(value);
		
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
		
				return this.state;
			}
		)
  	}

	render() {
	    const index = this.props.index;
		
		return (
			<section className="Conversation">
				{this.props.index !== '' &&
						[
							<ChatWall key={index} index={index} wall={this.state.walls[index]} />, 
							<ChatBar key="chatBar" onChatBarSubmit={this.handleChatBarSubmit}/>
						]
				}
      		</section>
		)
	}
};

export default Conversation