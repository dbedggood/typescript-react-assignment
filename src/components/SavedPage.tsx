import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { deletePins } from "../redux"
import SetOfPins from "../components/SetOfPins"
import RootState from "../types/RootState"

const SavedPage = () => {
    const dispatch = useDispatch()
    const namedPinGroups = useSelector(
        (state: RootState) => state.namedPinGroups
    )

    const handleDelete = (pins: string[]) => {
        dispatch(deletePins(pins))
    }

    const boxedPinGroups = namedPinGroups.map((group, groupIndex) => {
        return (
            <div key={groupIndex}>
                <input value={group.name}></input>
                <SetOfPins pins={group.pins}></SetOfPins>
                <button onClick={() => handleDelete(group.pins)}>DELETE</button>
            </div>
        )
    })

    return <div>{boxedPinGroups}</div>
}

export default SavedPage
