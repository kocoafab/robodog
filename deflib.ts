namespace deflib {
    export enum Posture {
        //% block="ready"
        Ready,
        //% block="sit"
        SitDown,
        //% block="handstand"
        Handstand,
        //% block="stretch"
        Stretch,
        //% block="say hello"
        SayHello
    }

    export enum LegGroup {
        //% block="all legs"
        AllLegs = 0,
        //% block="front legs"
        FrontLegs = 1,
        //% block="rear legs"
        BackLegs = 2,
        //% block="left legs"
        LeftLegs = 3,
        //% block="right legs"
        RightLegs = 4
    }

    export enum LegSelection {
        //% block="left front leg"
        LeftFront = 0,
        //% block="left rear leg"
        LeftBack = 1,
        //% block="right rear leg"
        RightBack = 2,
        //% block="right front leg"
        RightFront = 3,
        //% block="front legs"
        FrontLegs = 4,
        //% block="rear legs"
        BackLegs = 5,
        //% block="left legs"
        LeftLegs = 6,
        //% block="right legs"
        RightLegs = 7,
        //% block="all legs"
        AllLegs = 8
    }

    export enum RotateDirection {
        //% block="clockwise"
        Clockwise = 0,
        //% block="counterclockwise"
        Counterclockwise = 1
    }

    export enum MoveDirection {
        //% block="forward"
        Forward = 0,
        //% block="backward"
        Backward = 1
    }

    export enum HeadLedSide {
        //% block="left"
        Left = 0,
        //% block="right"
        Right = 1,
        //% block="both"
        Both = 2
    }

    export enum TiltAxis {
        //% block="left/right"
        LeftRight = 0,
        //% block="forward/backward"
        ForwardBackward = 1
    }

    export enum LedExpression {
        //% block="sparkling eyes"
        SparklingEyes,
        //% block="I LOVE YOU"
        ILoveYou,
        //% block="eyes closed"
        EyesClosed,
        //% block="thanks"
        Thanks,
        //% block="thank you"
        ThankYou,
        //% block="sparrow"
        Sparrow,
        //% block="rolling eyes"
        RollingEyes,
        //% block="sharp eyes"
        SharpEyes,
        //% block="blinking sharp eyes"
        BlinkingSharpEyes,
        //% block="insect"
        Insect,
        //% block="blink"
        Blink,
        //% block="snake eyes"
        SnakeEyes,
        //% block="pinwheel"
        Pinwheel,
        //% block="big eyes"
        BigEyes
    }

    export enum SoundEffect {
        //% block="bark"
        Bark = 1,
        //% block="growl"
        Growl = 2,
        //% block="angry"
        Angry = 3,
        //% block="whine"
        Whine = 4,
        //% block="heavy breath"
        HeavyBreath = 5,
        //% block="hello"
        Hello = 11,
        //% block="wait"
        Wait = 12,
        //% block="move aside"
        MoveAside = 13,
        //% block="start"
        Start = 14,
        //% block="laser"
        Laser = 21,
        //% block="motor rotation"
        MotorRotation = 22,
        //% block="ding-ding"
        DingDing = 23,
        //% block="alien signal"
        AlienSignal = 24,
        //% block="motion"
        Motion = 25,
        //% block="collision"
        Collision = 26,
        //% block="do"
        Do = 31,
        //% block="re"
        Re = 32,
        //% block="mi"
        Mi = 33,
        //% block="fa"
        Fa = 34,
        //% block="sol"
        Sol = 35,
        //% block="la"
        La = 36,
        //% block="si"
        Si = 37,
        //% block="#do"
        SharpDo = 38,
        //% block="user def1"
        UserDef1 = 41,
        //% block="user def2"
        UserDef2 = 42,
        //% block="user def3"
        UserDef3 = 43,
        //% block="user def4"
        UserDef4 = 44,
        //% block="user def5"
        UserDef5 = 45
    }

    export enum SoundVolume {
        //% block="loud"
        Loud = 3,
        //% block="medium"
        Medium = 2,
        //% block="quiet"
        Quiet = 1
    }


    export function findPattern(buffer: Buffer, pattern: number[]): number {
        for (let j = 0; j <= buffer.length - pattern.length; j++) {
            let match = true;
            for (let k = 0; k < pattern.length; k++) {
                if (buffer[j + k] !== pattern[k]) {
                    match = false;
                    break;
                }
            }
            if (match) return j;
        }
        return -1;
    }

    export function toSigned8(n: number): number {
        n = n & 0xff
        return (n ^ 0x80) - 0x80
    }

    export function toSigned16(n: number): number {
        n = n & 0xffff
        return (n ^ 0x8000) - 0x8000
    }

    export function constrain(val: number, min: number, max: number): number {
        if (val > max)
            val = max
        if (val < min)
            val = min
        return val
    }
}
