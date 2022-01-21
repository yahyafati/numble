import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import NumberKeyStyled from "./NumPadKeyStyle";

export const NumberKey = ({ num }) => {
    const { setGuessSafe, currentGuess } = useContext(GlobalContext);

    const clicked = () => {
        if (currentGuess.includes(String(num))) {
            // TODO Shake it Off
            return;
        }
        setGuessSafe(currentGuess + String(num));
    };

    return (
        <NumberKeyStyled
            onKeyDown={(e) => e.preventDefault()}
            onClick={clicked}
        >
            {num}
        </NumberKeyStyled>
    );
};

export default NumberKey;
