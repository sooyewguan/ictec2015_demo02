/*jslint node:true, vars:true, bitwise:true, unparam:true */
/*jshint unused:true */
// Leave the above lines for propper jshinting
//Type Node.js Here :)

var mraa = require('mraa');
var led = new mraa.Gpio(6);

var io = require('socket.io').listen(1337);

io.on('connection', function (socket) {   
    console.log("someone is connected!");
    
    socket.on('led', function(data) {
        if(led.read() == 1)
        {
            led.write(0);
        }
        else
        {
            led.write(1);
        }
    });

});