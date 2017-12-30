import React from 'react';

class ChatWall extends React.Component {
	render() {
		var msgs = this.props.wall;
		var msgLines = msgs.map((msg, i) => 
				<p key={i}><span>{msg}</span></p>
			)

		return (
			<div id={this.props.index} className="ChatWall">
				<h1>Number {this.props.index}</h1>
				<div className="msgLines">{msgLines}</div>
      		</div>
		)
	}
};

export default ChatWall