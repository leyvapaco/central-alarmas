input.onButtonPressed(Button.A, function () {
    alarmaActiva = true
    music.playTone(330, music.beat(BeatFraction.Whole))
    basic.showString("ON")
})
radio.onReceivedString(function (receivedString) {
    Alerta(receivedString)
})
input.onButtonPressed(Button.B, function () {
    alarmaActiva = false
    music.playTone(131, music.beat(BeatFraction.Whole))
    basic.showString("OFF")
})
function Alerta (texto: string) {
    for (let index = 0; index < 100; index++) {
        basic.showString(texto)
        music.playTone(554, music.beat(BeatFraction.Whole))
    }
}
let alarmaActiva = false
alarmaActiva = false
radio.setGroup(1)
basic.forever(function () {
    if (alarmaActiva == true) {
        if (input.temperature() >= 47) {
            radio.sendString("fuego")
        }
        if (input.soundLevel() >= 150) {
            radio.sendString("robo")
        }
    }
    basic.pause(5000)
})
