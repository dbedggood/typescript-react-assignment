import { createStore } from "redux"
import RootState from "../types/RootState"
import PinGroup from "../types/PinGroup"

export const savePins = (pins: string[]) => {
    return {
        type: "SAVE_PINS",
        payload: pins
    }
}

export const deletePins = (pins: string[]) => {
    return {
        type: "DELETE_PINS",
        payload: pins
    }
}

export const updateName = (namedPinGroup: PinGroup) => {
    return {
        type: "UPDATE_NAME",
        payload: namedPinGroup
    }
}

export const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "SAVE_PINS":
            const pinGroupPins: string[][] = state.namedPinGroups.map(
                (pinGroup) => pinGroup.pins
            )
            if (
                pinGroupPins.includes(action.payload) ||
                action.payload.includes("")
            ) {
                return state
            } else {
                return {
                    namedPinGroups: [
                        ...state.namedPinGroups,
                        { name: "Name", pins: action.payload }
                    ]
                }
            }

        case "DELETE_PINS":
            const filteredPinGroups: PinGroup[] = state.namedPinGroups.filter(
                (pinGroup: PinGroup) => {
                    return pinGroup.pins !== action.payload
                }
            )
            return {
                namedPinGroups: filteredPinGroups
            }

        case "UPDATE_NAME":
            const updatedPinGroups: PinGroup[] = state.namedPinGroups.map(
                (namedPinGroup) => {
                    if (namedPinGroup.pins === action.payload.pins) {
                        return {
                            ...namedPinGroup,
                            name: action.payload.name
                        }
                    }
                    return namedPinGroup
                }
            )
            return {
                namedPinGroups: updatedPinGroups
            }

        default:
            return state
    }
}

const initialState: RootState = {
    namedPinGroups: []
}

const store = createStore(reducer)
export default store
