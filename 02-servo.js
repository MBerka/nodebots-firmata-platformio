var five = require('johnny-five')  
var board = new five.Board()  
board.on('ready', function () {  
    servo = new five.Servo({pin: 13, range: [0, 180]});
    servo.sweep();
    board.wait(3000, () => {servo.stop(); servo.center();});
    // Check the docs to see how to bring it back into line 
})
