robodog.gesture(Deflib.posture.ready)
robodog.leg_bend(Deflib.whatlegs.all_legs, 60)
robodog.leg(Deflib.legs.front_legs, 60, 0)
robodog.motor(Deflib.legs.left_front, 0, 0)
robodog.move(Deflib.front_back.front, 50)
robodog.rotation(Deflib.rotate_dir.cw, 90, 80)
robodog.rotation_absolute(0, 100)
robodog.headled_exp(Deflib.led_draw.zero)
robodog.headled_print(Deflib.left_right.both, "A")
robodog.bodyled(0, 128, 255)
robodog.sound_play(Deflib.mp3_list._1, Deflib.mp3_volume.middle)

basic.forever(function () {
    let battery = robodog.get_battery()
    let distance = robodog.get_tof()
    let tilt = robodog.get_tilt(Deflib.lr_fb.fb)
    let rotation = robodog.get_rotation()

    if (robodog.get_button() > 0) {
        basic.showNumber(battery)
    } else if (distance < 20) {
        robodog.move(Deflib.front_back.front, 0)
    } else if (tilt > 20 || rotation > 180) {
        robodog.headled_exp(Deflib.led_draw.two)
    }

    basic.pause(1000)
})
