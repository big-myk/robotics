let accelerate = 0
basic.forever(function on_forever() {
    
    if (input.buttonIsPressed(Button.AB)) {
        accelerate = 0
    }
    
    if (input.buttonIsPressed(Button.A)) {
        accelerate = 1
    }
    
    if (input.buttonIsPressed(Button.B)) {
        accelerate = -1
    }
    
})
basic.forever(function on_forever2() {
    if (accelerate == 0) {
        servos.P0.stop()
        servos.P1.stop()
        basic.showLeds(`
            # . . . #
                        . # . # .
                        . . # . .
                        . # . # .
                        # . . . #
        `)
    }
    
    if (accelerate == 1) {
        servos.P0.run(100)
        servos.P1.run(-100)
        basic.showLeds(`
            # . . . .
                        . # . . .
                        . . # . .
                        . # . . .
                        # . . . .
        `)
    }
    
    if (accelerate == -1) {
        servos.P0.run(-60)
        servos.P1.run(60)
        basic.showLeds(`
            . . . . #
                        . . . # .
                        . . # . .
                        . . . # .
                        . . . . #
        `)
    }
    
})
basic.forever(function on_forever3() {
    if (accelerate == 0) {
        motorbit.brake()
        basic.showLeds(`
            # . . . #
                        . # . # .
                        . . # . .
                        . # . # .
                        # . . . #
        `)
    }
    
    if (accelerate == 1) {
        motorbit.forward(40)
        basic.showLeds(`
            # . . . .
                        . # . . .
                        . . # . .
                        . # . . .
                        # . . . .
        `)
    }
    
    if (accelerate == -1) {
        motorbit.back(15)
        basic.showLeds(`
            . . . . #
                        . . . # .
                        . . # . .
                        . . . # .
                        . . . . #
        `)
    }
    
})
