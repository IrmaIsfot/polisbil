input.onLogoEvent(TouchButtonEvent.Touched, function () {
    music.setVolume(164)
    soundExpression.giggle.playUntilDone()
    music.setVolume(19)
})
input.onButtonPressed(Button.A, function () {
    if (knapp_A) {
        knapp_A = false
        Sluta = true
    } else {
        knapp_A = true
    }
})
input.onButtonPressed(Button.B, function () {
    basic.pause(600)
    RingbitCar.steering_angle(RingbitCar.Direction_turn.right, 360)
})
let Sluta = false
let knapp_A = false
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
let Lysdioder = neopixel.create(DigitalPin.P0, 2, NeoPixelMode.RGB)
let LED_höger = Lysdioder.range(0, 1)
let LED_vänster = Lysdioder.range(1, 1)
music.setVolume(19)
basic.showNumber(3)
basic.showNumber(2)
basic.showNumber(1)
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (knapp_A) {
        music.ringTone(494)
        for (let index = 0; index < 2; index++) {
            LED_höger.showColor(neopixel.colors(NeoPixelColors.Red))
            LED_vänster.showColor(neopixel.colors(NeoPixelColors.Blue))
            basic.pause(150)
            LED_höger.showColor(neopixel.colors(NeoPixelColors.Blue))
            LED_vänster.showColor(neopixel.colors(NeoPixelColors.Red))
            basic.pause(150)
        }
        music.ringTone(392)
        for (let index = 0; index < 2; index++) {
            LED_höger.showColor(neopixel.colors(NeoPixelColors.Red))
            LED_vänster.showColor(neopixel.colors(NeoPixelColors.Blue))
            basic.pause(150)
            LED_höger.showColor(neopixel.colors(NeoPixelColors.Blue))
            LED_vänster.showColor(neopixel.colors(NeoPixelColors.Red))
            basic.pause(150)
        }
    } else {
        if (Sluta) {
            LED_höger.showColor(neopixel.colors(NeoPixelColors.Black))
            LED_vänster.showColor(neopixel.colors(NeoPixelColors.Black))
            music.stopAllSounds()
            Sluta = false
        }
    }
})
