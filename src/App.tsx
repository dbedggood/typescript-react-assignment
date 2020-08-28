import React, { useState } from "react"
import NavBar from "./components/NavBar"
import GeneratePage from "./components/GeneratePage"
import SavedPage from "./components/SavedPage"

const App = () => {
    const [page, setPage] = useState("generate")

    return (
        <div>
            <NavBar setCurrentPage={setPage}></NavBar>
            {page === "generate" && <GeneratePage></GeneratePage>}
            {page === "saved" && <SavedPage></SavedPage>}
        </div>
    )
}

export default App
