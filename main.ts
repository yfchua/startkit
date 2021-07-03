input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P0, 0)
    for (let index = 0; index < 4; index++) {
        pins.servoWritePin(AnalogPin.P2, 0)
        basic.pause(500)
        pins.servoWritePin(AnalogPin.P2, 90)
        basic.pause(500)
    }
    secretstring = "" + secretstring + "a"
})
input.onButtonPressed(Button.B, function () {
    if (l == 1) {
        pins.digitalWritePin(DigitalPin.P1, 0)
        l = 0
    } else {
        pins.digitalWritePin(DigitalPin.P1, 1)
        l = 1
    }
    secretstring = "" + secretstring + "b"
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (secretstring == "aabbbaab") {
        soundExpression.happy.play()
        basic.showIcon(IconNames.Yes)
    } else {
        soundExpression.sad.play()
        basic.showIcon(IconNames.No)
    }
    secretstring = ""
})
let l = 0
let secretstring = ""
secretstring = ""
basic.forever(function () {
    basic.showIcon(IconNames.SmallSquare)
    basic.showIcon(IconNames.Square)
})
