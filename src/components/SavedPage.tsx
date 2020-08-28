import React from "react"
import { useSelector } from "react-redux"
import SetOfPins from "../components/SetOfPins"
import RootState from "../types/RootState"

const SavedPage = () => {
    const namedPinGroups = useSelector(
        (state: RootState) => state.namedPinGroups
    )

    const boxedPinGroups = namedPinGroups.map((group, groupIndex) => {
        return (
            <div key={groupIndex}>
                <input value={group.name}></input>
                <SetOfPins pins={group.pins}></SetOfPins>
            </div>
        )
    })

    return <div>{boxedPinGroups}</div>
}

export default SavedPage
