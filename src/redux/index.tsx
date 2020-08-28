import { createStore } from "redux"
import RootState from "../types/RootState"
import PinGroups from "../types/PinGroup"

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

export const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "SAVE_PINS":
            const pinGroups: string[][] = state.namedPinGroups.map(
                (pinGroup) => pinGroup.pins
            )
            if (
                pinGroups.includes(action.payload) ||
                action.payload.includes("")
            ) {
                return state
            } else {
                return {
                    namedPinGroups: [
                        ...state.namedPinGroups,
                        { name: "placeholderName", pins: action.payload }
                    ]
                }
            }

        case "DELETE_PINS":
            const filteredPinGroups: PinGroups[] = state.namedPinGroups.filter(
                (pinGroup: PinGroups) => {
                    return pinGroup.pins !== action.payload
                }
            )
            return {
                namedPinGroups: filteredPinGroups
            }

        default:
            return state
    }
}

const initialState: RootState = {
    namedPinGroups: []
}

const store = createStore(reducer)
store.subscribe(() => console.log(store.getState()))
export default store
