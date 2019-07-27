var five = require('johnny-five')  
var board = new five.Board()  
board.on('ready', function () {  
    const motor = new five.Motor(9, {
      pins: { pwm: 9, brake: 9 },
    });
    motor.on('start', () => board.wait(2000, () => {motor.stop();}));
    motor.on('stop', () => board.wait(1000, () => {motor.start(200);}));
    motor.start(200);

    // Check the docs to see how to bring it back into line 
})
