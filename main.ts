radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 5) {
        radio.sendNumber(1)
    } else if (receivedNumber == 10) {
        unlock = 15
    } else if (receivedNumber == 15) {
        music.playTone(262, music.beat(BeatFraction.Eighth))
        music.rest(music.beat(BeatFraction.Eighth))
        music.playTone(262, music.beat(BeatFraction.Eighth))
        music.rest(music.beat(BeatFraction.Eighth))
        music.playTone(262, music.beat(BeatFraction.Eighth))
        music.rest(music.beat(BeatFraction.Eighth))
        music.playTone(523, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.playTone(523, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.playTone(523, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.playTone(262, music.beat(BeatFraction.Eighth))
        music.rest(music.beat(BeatFraction.Eighth))
        music.playTone(262, music.beat(BeatFraction.Eighth))
        music.rest(music.beat(BeatFraction.Eighth))
        music.playTone(262, music.beat(BeatFraction.Eighth))
        music.rest(music.beat(BeatFraction.Eighth))
    } else {
        basic.showNumber(receivedNumber)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(5)
})
let unlock = 0
radio.setGroup(1)
