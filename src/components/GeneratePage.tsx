import React, { useState } from "react"
import { useDispatch } from "react-redux"
import generatePins from "../generatePins"
import { savePins } from "../redux"

const GeneratePage = () => {
    const [pins, setPins] = useState<string[]>(["", "", "", "", ""])
    const dispatch = useDispatch()

    const handleGenerate = () => {
        setPins(generatePins())
    }

    const handleSave = () => {
        dispatch(savePins(pins))
    }

    const pinBoxes = pins.map((pin, index) => {
        return <input readOnly value={pin} key={index}></input>
    })

    return (
        <div>
            <div>{pinBoxes}</div>
            <button onClick={() => handleGenerate()}>GENERATE</button>
            <button onClick={() => handleSave()}>SAVE</button>
        </div>
    )
}

export default GeneratePage
