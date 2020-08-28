import React from "react"
import { useSelector } from "react-redux"
import SetOfPins from "../components/SetOfPins"
import RootState from "../types/RootState"

const SavedPage = () => {
    const pinGroups = useSelector((state: RootState) => state.pins)
    const boxedPinGroups = pinGroups.map((group, groupIndex) => {
        return (
            <div key={groupIndex}>
                <SetOfPins pins={group}></SetOfPins>
            </div>
        )
    })

    return <div>{boxedPinGroups}</div>
}

export default SavedPage
