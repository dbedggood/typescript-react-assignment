import React from "react"
import styled from "styled-components"

const Navigation = styled("div")`
    font-size: 1.5rem;
    padding-left: 0.5em;
    background: #ffffff;
    width: 100%;
    box-shadow: 0 3px 10px 3px #ccc;
    height: 5vh;
    min-height: 50px;
    display: flex;
`

const NavButton = styled("button")`
    text-decoration: none;
    font-size: 1rem;
    padding: 0.5em 1em 0.3em 1em;
    margin: 0.5em 0 0 1em;
    background: #ffffff;
    border: none;
    border-bottom: solid 2px #ffffff;
    &:hover,
    :focus {
        outline: none;
        border-bottom: solid 2px #4da6ff;
        transition: 0.3s;
    }
`

const NavBar = ({ setCurrentPage }: any) => {
    return (
        <Navigation>
            <NavButton onClick={() => setCurrentPage("generate")}>
                Generate
            </NavButton>
            <NavButton onClick={() => setCurrentPage("saved")}>Saved</NavButton>
        </Navigation>
    )
}

export default NavBar
