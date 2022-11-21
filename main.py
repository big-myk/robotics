accelerate = 0

def on_forever():
    global accelerate
    if input.button_is_pressed(Button.AB):
        accelerate = 0
    if input.button_is_pressed(Button.A):
        accelerate = 1
    if input.button_is_pressed(Button.B):
        accelerate = -1
basic.forever(on_forever)

def on_forever2():
    if accelerate == 0:
        servos.P0.stop()
        servos.P1.stop()
        basic.show_leds("""
            # . . . #
                        . # . # .
                        . . # . .
                        . # . # .
                        # . . . #
        """)
    if accelerate == 1:
        servos.P0.run(100)
        servos.P1.run(-100)
        basic.show_leds("""
            # . . . .
                        . # . . .
                        . . # . .
                        . # . . .
                        # . . . .
        """)
    if accelerate == -1:
        servos.P0.run(-60)
        servos.P1.run(60)
        basic.show_leds("""
            . . . . #
                        . . . # .
                        . . # . .
                        . . . # .
                        . . . . #
        """)
basic.forever(on_forever2)

def on_forever3():
    if accelerate == 0:
        motorbit.brake()
        basic.show_leds("""
            # . . . #
                        . # . # .
                        . . # . .
                        . # . # .
                        # . . . #
        """)
    if accelerate == 1:
        motorbit.forward(40)
        basic.show_leds("""
            # . . . .
                        . # . . .
                        . . # . .
                        . # . . .
                        # . . . .
        """)
    if accelerate == -1:
        motorbit.back(15)
        basic.show_leds("""
            . . . . #
                        . . . # .
                        . . # . .
                        . . . # .
                        . . . . #
        """)
basic.forever(on_forever3)
