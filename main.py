def on_button_pressed_a():
    global secretstring
    pins.digital_write_pin(DigitalPin.P1, 1)
    pins.digital_write_pin(DigitalPin.P0, 0)
    for index in range(4):
        pins.servo_write_pin(AnalogPin.P2, 0)
        basic.pause(500)
        pins.servo_write_pin(AnalogPin.P2, 90)
        basic.pause(500)
    secretstring = "" + secretstring
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    pins.digital_write_pin(DigitalPin.P1, 0)
input.on_button_pressed(Button.B, on_button_pressed_b)

secretstring = ""
secretstring = ""

def on_forever():
    basic.show_icon(IconNames.HEART)
    basic.show_icon(IconNames.SMALL_HEART)
basic.forever(on_forever)
