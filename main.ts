radio.onReceivedNumber(function (receivedNumber) {
    let Recived_number = 0
    Potato = Recived_number
})
input.onButtonPressed(Button.AB, function () {
    Potato = randint(10, 20)
})
input.onGesture(Gesture.Shake, function () {
    if (Potato > 0) {
        radio.setGroup(Potato)
        Potato = -1
    }
})
let Potato = 0
Potato = 0
radio.setGroup(1)
basic.forever(function () {
    if (Potato == 0) {
        basic.showIcon(IconNames.Skull)
    }
    if (Potato > 0) {
        basic.clearScreen()
    }
    if (Potato > 0) {
        basic.showIcon(IconNames.Chessboard)
        Potato += 1
    }
})
