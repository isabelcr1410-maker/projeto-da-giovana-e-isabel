basic.forever(function () {
    music.play(music.tonePlayable(784, music.beat(BeatFraction.Half)), music.PlaybackMode.InBackground)
    music.play(music.stringPlayable("- F A B A G - - ", 120), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        . . # . .
        . . # . .
        . # . # .
        `)
})
