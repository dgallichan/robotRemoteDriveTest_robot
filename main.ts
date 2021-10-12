radio.onReceivedValue(function (name, value) {
    if (name == "Go") {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            . . # . .
            `)
        bitbot.goms(BBDirection.Forward, 30, value)
    } else if (name == "Rotate") {
        basic.showLeds(`
            . . # . .
            # # # # .
            # . # . .
            # . . . .
            # # # # #
            `)
        bitbot.rotatems(BBRobotDirection.Right, 30, value)
    } else {
        basic.showIcon(IconNames.No)
        bitbot.setLedColor(0xFF0000)
    }
    basic.pause(2000)
    basic.showIcon(IconNames.Happy)
    bitbot.ledRainbow()
})
bitbot.select_model(BBModel.Classic)
radio.setGroup(99)
basic.showLeds(`
    # # # . .
    # . # . .
    # # . . .
    # # . . .
    # . # . .
    `)
bitbot.ledRainbow()
basic.forever(function () {
	
})
