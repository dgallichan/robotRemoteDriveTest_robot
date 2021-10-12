radio.onReceivedValue(function (name, value) {
    if (name == "Go") {
        basic.showLeds(`
            # # # # .
            # . . . .
            # . # # #
            # . . # .
            # # # # .
            `)
        bitbot.goms(BBDirection.Forward, 60, value)
    } else if (name == "Rotate") {
        basic.showLeds(`
            . . # . .
            # # # # .
            # . # . .
            # . . . .
            # # # # #
            `)
        bitbot.rotatems(BBRobotDirection.Right, 60, value)
    } else {
        basic.showIcon(IconNames.No)
    }
    basic.pause(2000)
    basic.showIcon(IconNames.Happy)
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
basic.forever(function () {
	
})
