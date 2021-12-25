input.onLogoEvent(TouchButtonEvent.Touched, function () {
    music.setVolume(164)
    soundExpression.giggle.playUntilDone()
    music.setVolume(19)
})
radio.onReceivedNumber(function (receivedNumber) {
    Styrkod = receivedNumber
    if (Styrkod == 1) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        RingbitCar.running_time(RingbitCar.Direction_run.forward, 1)
    }
    if (Styrkod == 2) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        RingbitCar.steering_angle(RingbitCar.Direction_turn.right, 90)
    }
    if (Styrkod == 3) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        RingbitCar.running_time(RingbitCar.Direction_run.backward, 1)
    }
    if (Styrkod == 4) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        RingbitCar.steering_angle(RingbitCar.Direction_turn.left, 90)
    }
    basic.clearScreen()
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
    RingbitCar.steering_angle(RingbitCar.Direction_turn.right, 465)
})
let Sluta = false
let knapp_A = false
let Styrkod = 0
radio.setGroup(1)
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
let Lysdioder = neopixel.create(DigitalPin.P0, 2, NeoPixelMode.RGB)
let LED_höger = Lysdioder.range(0, 1)
let LED_vänster = Lysdioder.range(1, 1)
Styrkod = 1
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
