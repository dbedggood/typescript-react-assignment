import { createStore } from "redux"

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

interface StateType {
    pins: string[][]
}

const initialState: StateType = {
    pins: []
}

const store = createStore(reducer)
export default store
