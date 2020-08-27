import React from "react"
import generatePins from "./generatePins"

const App = () => {
    return <div>{<div>{generatePins().join(" ")}</div>}</div>
}

export default App
