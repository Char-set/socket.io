var socket = io('127.0.0.1:8000');

console.log('>>>', socket);
var arry = ['background-color:rgba(0, 255, 78, 0.2)', 'background-color:rgba(255, 206, 114, 0.2)', 'background-color:rgba(0,210,209, 0.2)', 'background-color:rgba(102,203,164, 0.2)', 'background-color:rgba(249,89,177, 0.3)', 'background-color:rgba(144,200,65, 0.2)'];

$('#chat').click(function () {
	var data = {
		nick: '用户' + new Date().getTime(),
		content: $("#content").val()
	};
	console.log('>>>', data);
	if (data.content != '') {
		socket.emit('chat', data);
	}

})

socket.on('chat', function (msg) {
	var index = Math.floor((Math.random() * arry.length));
	$("<div style='" + arry[index] + ";margin-bottom:10px;'><label>" + msg.data.nick + ":</label><span>&nbsp;&nbsp;" + msg.data.content + "</span></div>").insertAfter($('#msgs'));
});



