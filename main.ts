radio.onReceivedValue(function (name, value) {
    if (name == "Go") {
        bitbot.setLedColor(0x40C0FF)
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            . . # . .
            `)
        bitbot.goms(BBDirection.Forward, 30, value)
    } else if (name == "Rotate") {
        bitbot.setLedColor(0x40C0FF)
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
    basic.pause(500)
    basic.showIcon(IconNames.Happy)
    bitbot.setLedColor(0x659900)
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
bitbot.setLedColor(0x659900)
bitbot.ledBrightness(40)
basic.forever(function () {
	
})
