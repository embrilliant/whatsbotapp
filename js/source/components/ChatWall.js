import React from 'react';
import axios from 'axios';

class ChatWall extends React.Component {

	componentDidMount() {
		const wall = document.querySelector('.msgLines');
		wall.scrollTop = wall.scrollHeight;
	}

	componentDidUpdate() {
		const wall = document.querySelector('.msgLines');
		wall.scrollTop = wall.scrollHeight;

		axios({
			method: 'post',
 			url: 'log/log.php',
 			data: {
    			sender: this.props.senders[this.props.senders.length - 1],
    			message: this.props.wall[this.props.wall.length - 1]
			}
		});
	}

	render() {
		const messages = this.props.wall;
		const senders = this.props.senders;
		const msgLines = messages.map((message, index) => {
				let sender = senders[index];
				
				return (
					<p className={sender} key={index}>
						<span>{message}</span>
					</p>
				)
			}
		)

		return (
			<div id={this.props.index} className="chat-wall">
				<h1>Contact {this.props.index + 1}</h1>
				<div className="msgLines">
					<div className="inner-block">
					</div>
					<div className="text">
						{msgLines}
					</div>
				</div>
      		</div>
		)
	}
};

export default ChatWall