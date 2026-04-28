# 로보독 빅아이(Robodog Bigeye)

로보독 빅아이는 4족 보행 시스템을 갖춘 교육용 로봇입니다.
이 패키지는 **UART 전용 MakeCode 확장**으로, 기본 움직임과 LED, 사운드, 센서 블록을 제공합니다.

Robodog Bigeye is an educational robot equipped with a quadruped walking system.
This package is the **UART-only MakeCode extension** for movement, LED, sound, and sensor blocks.

* 이 UART 패키지는 `radio` 의존성이 없으므로 micro:bit의 **Bluetooth 블록과 함께 사용할 수 있습니다**.
* 라디오 통신이나 AI 블록이 필요하면 **`robodog-radio` 확장**을 대신 추가해야 합니다.
* This UART package does not depend on `radio`, so it can be used together with the micro:bit **Bluetooth blocks**.
* For radio communication or AI blocks, install the **`robodog-radio` extension** instead.

## ~ hint
아래 링크를 통해 로보독 빅아이 제품 정보를 볼 수 있습니다.

You can find more information about Robodog Bigeye through the link below.

→ [로보독 빅아이 제품 살펴보기](https://www.kocoafab.cc/product/robodog)

## 기본 사용법(Basic usage)

```typescript
robodog.gesture(deflib.Posture.Ready)
robodog.legBend(deflib.LegGroup.AllLegs, 60)
robodog.move(deflib.MoveDirection.Forward, 50)
basic.pause(1000)
robodog.move(deflib.MoveDirection.Forward, 0)
```

* ``Robodog:Motion`` 블록으로 로보독의 자세, 다리 높이, 이동 방향과 속도를 제어합니다.
* Use ``Robodog:Motion`` blocks to control the posture, leg height, movement direction, and speed.

```typescript
robodog.rotation(deflib.RotateDirection.Clockwise, 90, 80)
robodog.rotationAbsolute(0, 100)
```

* ``Robodog:turn`` 블록은 현재 방향 기준으로 회전하고, ``Robodog:return`` 블록은 시작 방향으로 되돌립니다.
* The turn block rotates Robodog from the current direction, and the return block turns it back to the start direction.

```typescript
robodog.headLedExp(deflib.LedExpression.SparklingEyes)
robodog.headLedPrint(deflib.HeadLedSide.Both, "A")
robodog.bodyLed(0, 128, 255)
robodog.soundPlay(deflib.SoundEffect.Bark, deflib.SoundVolume.Medium)
```

* ``Robodog:LED`` 블록으로 헤드 LED 표정, 문자, 바디 LED 색상을 출력하고 ``Robodog:Sound`` 블록으로 효과음을 재생합니다.
* Use ``Robodog:LED`` blocks for head LED expressions, characters, and body LED colors, and use ``Robodog:Sound`` blocks to play sound effects.

```typescript
basic.forever(function () {
    serial.writeValue("battery", robodog.getBattery())
    serial.writeValue("distance", robodog.getTof())
    serial.writeValue("tilt", robodog.getTilt(deflib.TiltAxis.ForwardBackward))
    serial.writeValue("rotation", robodog.getRotation())
    basic.pause(1000)
})
```

* ``Robodog:Sensors`` 블록으로 버튼, 배터리, 거리센서, 기울기, 회전 값을 읽을 수 있습니다.
* Use ``Robodog:Sensors`` blocks to read button, battery, distance sensor, tilt, and rotation values.

## 라디오와 AI 사용법(Radio and AI usage)

라디오 통신과 AI 기능은 이 패키지에 포함되지 않습니다. 해당 기능이 필요하면 **`robodog-radio` 확장**을 사용하세요.

Radio communication and AI features are not included in this package. Use the **`robodog-radio` extension** when you need those features.

## 지원제품(Supported targets)

* for PXT/microbit

## 라이선스(License)

MIT

## 제품 문의(Product inquiries)

제품에 관한 문의는 ``02-3470-2829`` 또는 [contact@kocoa.or.kr](mailto:contact@kocoa.or.kr)를 통해 문의 부탁드립니다.

For product inquiries, please contact ``02-3470-2829`` or [contact@kocoa.or.kr](mailto:contact@kocoa.or.kr).

코코아팹 공식 스토어 바로가기 → [코코아팹 스마트 스토어](https://smartstore.naver.com/kocoafab)

Go to the official store of kocoafab.
