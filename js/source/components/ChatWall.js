import React from 'react';

class ChatWall extends React.Component {
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
				<div className="msgLines">{msgLines}</div>
      		</div>
		)
	}
};

export default ChatWall