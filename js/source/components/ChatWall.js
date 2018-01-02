import React from 'react';

class ChatWall extends React.Component {

	componentDidMount() {
		const wall = document.querySelector('.msgLines');
		wall.scrollTop = wall.scrollHeight;

		console.log('componentDidMount called');
	}

	componentDidUpdate() {
		const wall = document.querySelector('.msgLines');
		wall.scrollTop = wall.scrollHeight;

		console.log('componentDidUpdate called');
	}

	render() {
		const msgs = this.props.wall;
		const senders = this.props.senders;
		const msgLines = msgs.map((msg, index) => {
				let msgSender = senders[index];

				return (
					<p className={msgSender} key={index}>
						<span>{msg}</span>
					</p>
				)
			}
		)

		return (
			<div id={this.props.index} className="ChatWall">
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