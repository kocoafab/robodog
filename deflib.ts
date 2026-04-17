
namespace Deflib {
    export enum posture {
        //% block="ready"
        ready,
        //% block="sit"
        sitdown,
        //% block="handstand"
        handstand,
        //% block="stretch"
        stretch,
        //% block="say hello"
        sayhello
    }

    export enum whatlegs {
        //% block="all legs"
        all_legs = 0,
        //% block="front legs"
        front_legs = 1,
        //% block="rear legs"
        back_legs = 2,
        //% block="left legs"
        left_legs = 3,
        //% block="right legs"
        right_legs = 4
    }

    export enum legs {
        //% block="left front leg"
        left_front = 0,
        //% block="left rear leg"
        left_back = 1,
        //% block="right rear leg"
        right_back = 2,
        //% block="right front leg"
        right_front = 3,
        //% block="front legs"
        front_legs = 4,
        //% block="rear legs"
        back_legs = 5,
        //% block="left legs"
        left_legs = 6,
        //% block="right legs"
        right_legs = 7,
        //% block="all legs"
        all_legs = 8
    }

    export enum rotate_dir {
        //% block="clockwise"
        cw = 0,
        //% block="counterclockwise"
        ccw = 1
    }

    export enum front_back {
        //% block="forward"
        front = 0,
        //% block="backward"
        back = 1
    }

    export enum left_right {
        //% block="left"
        left = 0,
        //% block="right"
        right = 1,
        //% block="both"
        both = 2
    }

    export enum lr_fb {
        //% block="left/right"
        lr = 0,
        //% block="forward/backward"
        fb = 1
    }

    export enum led_draw {
        //% block="sparkling eyes"
        zero,
        //% block="I LOVE YOU"
        one,
        //% block="eyes closed"
        two,
        //% block="thanks"
        three,
        //% block="thank you"
        four,
        //% block="sparrow"
        five,
        //% block="rolling eyes"
        six,
        //% block="sharp eyes"
        seven,
        //% block="blinking sharp eyes"
        eight,
        //% block="insect"
        nine,
        //% block="blink"
        ten,
        //% block="snake eyes"
        eleven,
        //% block="pinwheel"
        twelve,
        //% block="big eyes"
        thirteen
    }

    export enum mp3_list {
        //% block="bark"
        _1 = 1,
        //% block="growl"
        _2 = 2,
        //% block="angry"
        _3 = 3,
        //% block="whine"
        _4 = 4,
        //% block="heavy breath"
        _5 = 5,
        //% block="hello"
        _11 = 11,
        //% block="wait"
        _12 = 12,
        //% block="move aside"
        _13 = 13,
        //% block="start"
        _14 = 14,
        //% block="laser"
        _21 = 21,
        //% block="motor rotation"
        _22 = 22,
        //% block="ding-ding"
        _23 = 23,
        //% block="alien signal"
        _24 = 24,
        //% block="motion"
        _25 = 25,
        //% block="collision"
        _26 = 26,
        //% block="do"
        _31 = 31,
        //% block="re"
        _32 = 32,
        //% block="mi"
        _33 = 33,
        //% block="fa"
        _34 = 34,
        //% block="sol"
        _35 = 35,
        //% block="la"
        _36 = 36,
        //% block="si"
        _37 = 37,
        //% block="#do"
        _38 = 38,
        //% block="user def1"
        _41 = 41,
        //% block="user def2"
        _42 = 42,
        //% block="user def3"
        _43 = 43,
        //% block="user def4"
        _44 = 44,
        //% block="user def5"
        _45 = 45
    }

    export enum mp3_volume {
        //% block="loud"
        big = 3,
        //% block="medium"
        middle = 2,
        //% block="quiet"
        small = 1
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
