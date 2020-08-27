const generatePins = (): string[] => {
    let pins: string[] = []
    while (pins.length < 5) {
        let pin: string = generatePin()
        if (isValidPin(pin) && !pins.includes(pin)) {
            pins.push(pin)
        }
    }
    return pins
}

const generatePin = (): string => {
    const pinNum: number = Math.floor(Math.random() * 10000) + 10000
    const pin: string = pinNum.toString().substring(1)
    return pin
}

const isValidPin = (pin: string): boolean => {
    const pinArr = pin.split("").map((digit) => parseInt(digit))
    if (!isConsecutiveAscOrDesc(pinArr) && !isConsecutiveSame(pinArr)) {
        return true
    } else {
        return false
    }
}

const isConsecutiveAscOrDesc = (pinArr: number[]): boolean => {
    let diff: number
    for (let i: number = 2; i < 4; i++) {
        let current: number = pinArr[i]
        let prev: number = pinArr[i - 1]
        let before: number = pinArr[i - 2]
        diff = prev - before
        if (Math.abs(diff) === 1 && diff === current - prev) {
            return true
        }
    }
    return false
}

const isConsecutiveSame = (pinArr: number[]): boolean => {
    let diff: number
    for (let i: number = 1; i < 4; i++) {
        let current: number = pinArr[i]
        let prev: number = pinArr[i - 1]
        diff = current - prev
        if (diff === 0) {
            return true
        }
    }
    return false
}

export default generatePins
