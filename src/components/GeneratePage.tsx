import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { savePins } from "../redux"
import SetOfPins from "../components/SetOfPins"
import generatePins from "../generatePins"
import styled from "styled-components"

const PageContent = styled("div")`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
`

const ButtonDiv = styled("div")`
    margin-top: 1em;
    display: flex;
    justify-content: space-between;
`

const BlueButton = styled("button")`
    width: 200px;
    padding: 0.7em 1.5em;
    font-weight: 700;
    font-size: 0.8rem;
    color: #4da6ff;
    border: solid 1px #4da6ff;
    border-radius: 0.5em;
    background-color: #ffffff;
    &:hover,
    :focus {
        outline: none;
        color: #ffffff;
        background-color: #4da6ff;
        transition: 0.3s;
    }
`

const GeneratePage = () => {
    const [pins, setPins] = useState<string[]>(["", "", "", "", ""])
    const dispatch = useDispatch()

    const handleGenerate = () => {
        setPins(generatePins())
    }

    const handleSave = () => {
        dispatch(savePins(pins))
    }

    return (
        <PageContent>
            <SetOfPins pins={pins}></SetOfPins>
            <ButtonDiv>
                <BlueButton onClick={() => handleGenerate()}>
                    GENERATE
                </BlueButton>
                <BlueButton onClick={() => handleSave()}>SAVE</BlueButton>
            </ButtonDiv>
        </PageContent>
    )
}

export default GeneratePage
