import React, { useContext } from "react";
import { FaBackspace } from "react-icons/fa";
import styled from "styled-components";
import { GlobalContext } from "../../context/GlobalContext";
import NumberKeyStyled from "./NumPadKeyStyle";

const DeleteKeyStyled = styled(NumberKeyStyled)`
    background-color: #a72d2d;
    color: #cccccc;
    border-color: #a72d2d;
`;

const DeleteKey = () => {
    const { setGuessSafe, currentGuess } = useContext(GlobalContext);

    const clicked = () => {
        const safeCurrentGuess = String(currentGuess);
        setGuessSafe(safeCurrentGuess.slice(0, safeCurrentGuess.length - 1));
    };

    return (
        <DeleteKeyStyled onClick={clicked}>
            <FaBackspace />
        </DeleteKeyStyled>
    );
};

export default DeleteKey;
