import React, { useState } from "react"
import NavBar from "./components/NavBar"
import GeneratePage from "./components/GeneratePage"
import SavedPage from "./components/SavedPage"
import styled from "styled-components"

const Main = styled("div")`
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    height: 90vh;
    min-height: 400px;
`

const App = () => {
    const [page, setPage] = useState("generate")

    return (
        <React.Fragment>
            <NavBar setCurrentPage={setPage}></NavBar>
            <Main>
                {page === "generate" && <GeneratePage></GeneratePage>}
                {page === "saved" && <SavedPage></SavedPage>}
            </Main>
        </React.Fragment>
    )
}

export default App
