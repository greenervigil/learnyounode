var net = require("net");

function timeStamp(value) {
	if (value.length == 1) {
		value = "0" + value;
	}
	return value;
}

var server = net.createServer(function(socket) {
	var currentDate = new Date();

	var YYYY = currentDate.getFullYear().toString();
	var MM = timeStamp((currentDate.getMonth() + 1).toString());
	var DD = timeStamp(currentDate.getDate().toString());
	var HH = timeStamp(currentDate.getHours().toString());
	var mm = timeStamp(currentDate.getMinutes().toString());

	var ret = YYYY + "-" + MM + "-" + DD + " " + HH + ":" + mm;

	// socket.write(dateToReturn);
	// console.log(dateToReturn);

	socket.end(ret + "\n");
});



server.listen(Number(process.argv[2]));