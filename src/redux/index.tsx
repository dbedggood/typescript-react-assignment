import { createStore } from "redux"
import RootState from "../types/RootState"

export const savePins = (pins: string[]) => {
    return {
        type: "SAVE_PINS",
        payload: pins
    }
}

export const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "SAVE_PINS":
            if (state.pins.includes(action.payload)) {
                return state
            } else {
                return { ...state, pins: [...state.pins, action.payload] }
            }
        default:
            return state
    }
}

const initialState: RootState = {
    pins: []
}

const store = createStore(reducer)
export default store
