import React, { useContext } from "react";
import { AiOutlineEnter } from "react-icons/ai";
import styled from "styled-components";
import { GlobalContext } from "../../context/GlobalContext";
import { addGuessToList } from "../../helper/Helper";
import NumberKeyStyled from "./NumPadKeyStyle";

const EnterKeyStyled = styled(NumberKeyStyled)`
    background-color: #ffa800;
    color: #ffffff;
    border-color: #ffa800;
`;

const EnterKey = () => {
    const { number, setGuessSafe, currentGuess, setDialog, addGuessedItem } =
        useContext(GlobalContext);

    const handleClick = () => {
        addGuessToList(
            currentGuess,
            number,
            addGuessedItem,
            setGuessSafe,
            setDialog
        );
    };

    return (
        <EnterKeyStyled onClick={handleClick}>
            <AiOutlineEnter />
        </EnterKeyStyled>
    );
};

export default EnterKey;
