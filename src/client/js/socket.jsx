var React  = require('react'),
	Socket = require('react-socket').Socket;
	SocketEvent = require('react-socket').Event;

 
module.exports = module.exports = React.createClass({
	render: function () {
 
		return (
			<div>
				<p>Sockets!</p>
				<Socket url="http://localhost:3000/socket.io/socket.io.js"/>
			</div>
		);
	}
});

 
// module.exports = module.exports = React.createClass({
// 	onSocketMessage: function (message) {
 
// 		return 'on socket message'
// 	},
// 	render: function () {
 
// 		return (
// 			<div>
// 				<SocketEvent name="your-socket-event" callback={ this.onSocketMessage }/>
// 			</div>
// 		);
// 	}
// });


