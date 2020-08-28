import React from "react"

const NavBar = ({ setCurrentPage }: any) => {
    return (
        <div>
            <button onClick={() => setCurrentPage("generate")}>Generate</button>
            <button onClick={() => setCurrentPage("saved")}>Saved</button>
        </div>
    )
}

export default NavBar
