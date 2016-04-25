var React  = require('react'),
	Socket = require('react-socket').Socket;
 
module.exports = module.exports = React.createClass({
	render: function () {
 
		return (
			<div>
				<Socket url="http://localhost:3000"/>
			</div>
		);
	}
});

	SocketEvent = require('react-socket').Event;
 
module.exports = module.exports = React.createClass({
	onSocketMessage: function (message) {
 
		...
	},
	render: function () {
 
		return (
			<div>
				<SocketEvent name="your-socket-event" callback={ this.onSocketMessage }/>
			</div>
		);
	}
});