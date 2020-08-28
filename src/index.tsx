import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import store from "./redux"
import App from "./App"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        margin: 0 auto;
        background: #f9f9ff;
    }
`

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <GlobalStyle />
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById("root")
)
