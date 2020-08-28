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
            return { ...state, pins: action.payload }
        default:
            return state
    }
}

const initialState = {
    pins: []
}

const store = createStore(reducer)

export default store
