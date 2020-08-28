import React, { ChangeEvent } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deletePins, updateName } from "../redux"
import SetOfPins from "../components/SetOfPins"
import RootState from "../types/RootState"
import PinGroup from "../types/PinGroup"

const SavedPage = () => {
    const dispatch = useDispatch()
    const namedPinGroups = useSelector(
        (state: RootState) => state.namedPinGroups
    )

    const handleDelete = (pins: string[]) => {
        dispatch(deletePins(pins))
    }

    const handleNameChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        namedPinGroup: PinGroup
    ) => {
        const renamedPinGroup: PinGroup = {
            ...namedPinGroup,
            name: event.target.value
        }
        dispatch(updateName(renamedPinGroup))
    }

    const boxedPinGroups = namedPinGroups.map((group, groupIndex) => {
        return (
            <div key={groupIndex}>
                <input
                    value={group.name}
                    onChange={(event) => handleNameChange(event, group)}
                ></input>
                <SetOfPins pins={group.pins}></SetOfPins>
                <button onClick={() => handleDelete(group.pins)}>DELETE</button>
            </div>
        )
    })

    return <div>{boxedPinGroups}</div>
}

export default SavedPage
