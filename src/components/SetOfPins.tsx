import React from "react"
import PinInput from "../ui/PinInput"
import styled from "styled-components"

const Set = styled("div")`
    display: flex;
    justify-content: space-between;
    width: 550px;
`

const SetOfPins = ({ pins }: any) => {
    const pinBoxes = pins.map((pin: string, index: number) => {
        return <PinInput readOnly value={pin} key={index}></PinInput>
    })
    return <Set>{pinBoxes}</Set>
}

export default SetOfPins
