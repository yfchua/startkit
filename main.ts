input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    for (let index = 0; index < 4; index++) {
        pins.servoWritePin(AnalogPin.P2, 50)
        basic.pause(500)
        pins.servoWritePin(AnalogPin.P2, 90)
        basic.pause(500)
    }
})
pins.digitalWritePin(DigitalPin.P1, 1)
basic.showString("Hello!")
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
})
