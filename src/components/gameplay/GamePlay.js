import React, { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import { GlobalContext } from "../../context/GlobalContext";
import ListItem, { CurrentGuessListItem } from "./ListItem";

const GamePlayedStyled = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    overflow-y: scroll;
`;

const GamePlay = () => {
    const { guessedNumbers, currentGuess } = useContext(GlobalContext);
    const gamePlayRef = useRef(null);

    useEffect(() => {
        if (!gamePlayRef) {
            return;
        }
        gamePlayRef.current.scrollTo({
            top: gamePlayRef.current.scrollHeight,
            behavior: "smooth",
        });
    });

    // console.log("Guess:" + guessedNumbers);
    return (
        <GamePlayedStyled ref={gamePlayRef}>
            {guessedNumbers.map((item, i) => (
                <ListItem key={i} item={item} />
            ))}
            <CurrentGuessListItem current={currentGuess} />
        </GamePlayedStyled>
    );
};

export default GamePlay;
