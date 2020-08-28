import React from "react"
import { useSelector } from "react-redux"
import RootState from "../types/RootState"

const SavedPage = () => {
    const pinGroups = useSelector((state: RootState) => state.pins)
    const boxedPinGroups = pinGroups.map((group, groupIndex) => {
        return (
            <div key={groupIndex}>
                {group.map((pin, index) => {
                    return <input readOnly value={pin} key={index}></input>
                })}
            </div>
        )
    })

    return <div>{boxedPinGroups}</div>
}

export default SavedPage
