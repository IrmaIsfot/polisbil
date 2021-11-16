input.onLogoEvent(TouchButtonEvent.Touched, function () {
    music.setVolume(95)
    soundExpression.giggle.playUntilDone()
    music.setVolume(23)
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
    basic.pause(1000)
    for (let index = 0; index < 4; index++) {
        RingbitCar.running_time(RingbitCar.Direction_run.forward, 1)
        RingbitCar.steering_angle(RingbitCar.Direction_turn.right, 93)
    }
    RingbitCar.brake()
})
let Sluta = false
let knapp_A = false
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
let strip = neopixel.create(DigitalPin.P0, 2, NeoPixelMode.RGB)
let LED_höger = strip.range(0, 1)
let LED_vänster = strip.range(1, 1)
music.setVolume(23)
basic.showNumber(3)
basic.showNumber(2)
basic.showNumber(1)
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (knapp_A) {
        music.ringTone(988)
        for (let index = 0; index < 2; index++) {
            LED_höger.showColor(neopixel.colors(NeoPixelColors.Red))
            LED_vänster.showColor(neopixel.colors(NeoPixelColors.Blue))
            basic.pause(150)
            LED_höger.showColor(neopixel.colors(NeoPixelColors.Blue))
            LED_vänster.showColor(neopixel.colors(NeoPixelColors.Red))
            basic.pause(150)
        }
        music.ringTone(784)
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
