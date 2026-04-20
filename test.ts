robodog.gesture(deflib.Posture.Ready)
robodog.legBend(deflib.LegGroup.AllLegs, 60)
robodog.leg(deflib.LegSelection.FrontLegs, 60, 0)
robodog.motor(deflib.LegSelection.LeftFront, 0, 0)
robodog.move(deflib.MoveDirection.Forward, 50)
robodog.rotation(deflib.RotateDirection.Clockwise, 90, 80)
robodog.rotationAbsolute(0, 100)
robodog.headLedExp(deflib.LedExpression.SparklingEyes)
robodog.headLedPrint(deflib.HeadLedSide.Both, "A")
robodog.bodyLed(0, 128, 255)
robodog.soundPlay(deflib.SoundEffect.Bark, deflib.SoundVolume.Medium)

basic.forever(function () {
    let battery = robodog.getBattery()
    let distance = robodog.getTof()
    let tilt = robodog.getTilt(deflib.TiltAxis.ForwardBackward)
    let rotation = robodog.getRotation()

    if (robodog.getButton()) {
        basic.showNumber(battery)
    } else if (distance < 20) {
        robodog.move(deflib.MoveDirection.Forward, 0)
    } else if (tilt > 20 || rotation > 180) {
        robodog.headLedExp(deflib.LedExpression.EyesClosed)
    }

    basic.pause(1000)
})
