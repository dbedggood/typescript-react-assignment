import React, { ChangeEvent } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deletePins, updateName } from "../redux"
import SetOfPins from "../components/SetOfPins"
import RootState from "../types/RootState"
import PinGroup from "../types/PinGroup"
import styled from "styled-components"

const PageContent = styled("div")`
    margin-top: 2em;
`

const Row = styled("div")`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 850px;
    margin-bottom: 1em;
`

const NameInput = styled("input")`
    padding: 1.1em 1em;
`

const DeleteButton = styled("button")`
    padding: 0.7em 1em;
    font-weight: 700;
    font-size: 0.8rem;
    color: #ffffff;
    border: solid 1px #c0392b;
    border-radius: 0.3em;
    background-color: #c0392b;
    &:hover,
    :focus {
        outline: none;
        color: #c0392b;
        background-color: #ffffff;
        transition: 0.3s;
    }
`

const SavedPage = () => {
    const dispatch = useDispatch()
    const namedPinGroups = useSelector(
        (state: RootState) => state.namedPinGroups
    )

    const handleDelete = (pins: string[]) => {
        dispatch(deletePins(pins))
    }

    const handleNameChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        namedPinGroup: PinGroup
    ) => {
        const renamedPinGroup: PinGroup = {
            ...namedPinGroup,
            name: event.target.value
        }
        dispatch(updateName(renamedPinGroup))
    }

    const boxedPinGroups = namedPinGroups.map((group, groupIndex) => {
        return (
            <Row key={groupIndex}>
                <NameInput
                    value={group.name}
                    onChange={(event) => handleNameChange(event, group)}
                ></NameInput>
                <SetOfPins pins={group.pins}></SetOfPins>
                <DeleteButton onClick={() => handleDelete(group.pins)}>
                    DELETE
                </DeleteButton>
            </Row>
        )
    })

    return <PageContent>{boxedPinGroups}</PageContent>
}

export default SavedPage
