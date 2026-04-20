# 로보독 빅아이(Robodog Bigeye)

로보독 빅아이는 4족 보행 시스템과 AI 학습 기능을 갖춘 교육용 로봇입니다.
메이크코드 확장 프로그램으로 로보독의 기능을 쉽게 제어할 수 있습니다.
* **이동 및 회전:** 전후 이동 및 좌우 회전
* **다리 각도 제어:** 개별 다리 관절을 정밀하게 제어
* **센서값 제어:** 내장된 LED 및 기타 센서값 제어

Robodog Bigeye is an educational robot equipped with a quadruped walking system and AI learning capabilities. 

With the dedicated **MakeCode extension**, you can easily control various functions, including:
* **Movement & Rotation:** Full control over walking directions and turns.
* **Leg Angle Control:** Precise adjustment of individual leg joints.
* **Hardware Interfacing:** Control built-in LEDs and other interactive components.

## ~ hint
아래 링크를 통해 로보독 빅아이 제품 정보를 볼 수 있습니다.

You can find more information about Robodog Bigeye through the link below.

→ [로보독 빅아이 제품 살펴보기](https://www.kocoafab.cc/product/robodog)


## 기본 사용법(Basic usage)

```typescript
robodog.setMode(deflib.RobodogMode.Uart)
```

* 기본 통신 방식은 UART입니다. ``Robodog:Connection`` 블록에서 UART 또는 라디오 방식을 선택할 수 있습니다.
* UART is the default transport. Use the ``Robodog:Connection`` blocks to select UART or radio mode.

```typescript
robodog.gesture(deflib.Posture.Ready)
robodog.legBend(deflib.LegGroup.AllLegs, 60)
robodog.move(deflib.MoveDirection.Forward, 50)
basic.pause(1000)
robodog.move(deflib.MoveDirection.Forward, 0)
```

* ``Robodog:Motion`` 블록을 사용해 로보독의 자세, 다리 높이, 이동 방향과 속도를 제어합니다.
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

라디오 통신을 사용하려면 시작할 때 로보독을 라디오 모드로 설정하고 라디오 밴드를 지정합니다. AI 블록은 라디오 패킷 경로를 사용합니다.

To use radio communication, set Robodog to radio mode on start and configure the radio band. AI blocks use the radio packet path.

```typescript
robodog.setMode(deflib.RobodogMode.Radio)
robodog.rfBand(7)
robodog.move(deflib.MoveDirection.Forward, 50)
```

```typescript
robodog.setMode(deflib.RobodogMode.Radio)
robodog.rfBand(7)
robodog.aiDetection(deflib.AiMode.FaceDetect)
robodog.faceTracking(deflib.AiClass.Class1)

basic.forever(function () {
    serial.writeValue("camera", robodog.getCameraAlive())
    serial.writeValue("face", robodog.getFaceClass())
    basic.pause(1000)
})
```

## 지원제품(Supported targets)

* for PXT/microbit

## 라이선스(License)

MIT

## 제품 문의(Product inquiries)

제품에 관한 문의는 ``02-3470-2829`` 또는 [contact@kocoa.or.kr](mailto:contact@kocoa.or.kr)를 통해 문의 부탁드립니다.

For product inquiries, please contact ``02-3470-2829`` or [contact@kocoa.or.kr](mailto:contact@kocoa.or.kr).

코코아팹 공식 스토어 바로가기 → [코코아팹 스마트 스토어](https://smartstore.naver.com/kocoafab)

Go to the official store of kocoafab.
