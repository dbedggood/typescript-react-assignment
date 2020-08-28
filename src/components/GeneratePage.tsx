import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { savePins } from "../redux"
import SetOfPins from "../components/SetOfPins"
import generatePins from "../generatePins"

const GeneratePage = () => {
    const [pins, setPins] = useState<string[]>(["", "", "", "", ""])
    const dispatch = useDispatch()

    const handleGenerate = () => {
        setPins(generatePins())
    }

    const handleSave = () => {
        dispatch(savePins(pins))
    }

    return (
        <div>
            <div>
                <SetOfPins pins={pins}></SetOfPins>
            </div>
            <button onClick={() => handleGenerate()}>GENERATE</button>
            <button onClick={() => handleSave()}>SAVE</button>
        </div>
    )
}

export default GeneratePage
