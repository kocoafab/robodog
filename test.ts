robodog.setMode(deflib.RobodogMode.Uart)
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

robodog.setMode(deflib.RobodogMode.Radio)
robodog.rfBand(7)
robodog.aiDetection(deflib.AiMode.FaceDetect)
robodog.faceTracking(deflib.AiClass.Class1)
let cameraReady = robodog.getCameraAlive()
let faceClass = robodog.getFaceClass()
let qrValue = robodog.getQrCode()
let aiX = robodog.getAiPosition(deflib.AiPositionAxis.X)

basic.forever(function () {
    let battery = robodog.getBattery()
    let distance = robodog.getTof()
    let tilt = robodog.getTilt(deflib.TiltAxis.ForwardBackward)
    let rotation = robodog.getRotation()

    if (cameraReady > 0 && robodog.getButton()) {
        basic.showNumber(battery)
    } else if (faceClass > 0 || aiX != 0 || qrValue != "none") {
        robodog.headLedExp(deflib.LedExpression.SparklingEyes)
    } else if (distance < 20) {
        robodog.move(deflib.MoveDirection.Forward, 0)
    } else if (tilt > 20 || rotation > 180) {
        robodog.headLedExp(deflib.LedExpression.EyesClosed)
    }

    basic.pause(1000)
})
