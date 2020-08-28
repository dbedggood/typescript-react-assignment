import React from "react"

const SetOfPins = ({ pins }: any) => {
    const pinBoxes = pins.map((pin: string, index: number) => {
        return <input readOnly value={pin} key={index}></input>
    })
    return <div>{pinBoxes}</div>
}

export default SetOfPins
