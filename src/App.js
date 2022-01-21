import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import GamePlay from "./components/gameplay/GamePlay";
import Header from "./components/header/Header";
import NumBar from "./components/numbar/NumBar";
import { GlobalContext } from "./context/GlobalContext";
import { addGuessToList, isValid } from "./helper/Helper";
const AppStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 1rem;
    padding: 1rem;
    justify-content: space-around;
    height: 100vh;
    max-height: 100vh;
`;
// const isValid = (num) => {
//     return new Set(String(num)).size === 4;
// };

const generateValidNumber = () => {
    let num = 0;
    do {
        num = parseInt(Math.random() * 10000);
    } while (!isValid(num));
    return String(num);
};

const App = () => {
    const [number, setNumber] = useState(generateValidNumber());
    const [currentGuess, setCurrentGuess] = useState("");
    const [startTime, setStartTime] = useState(0);
    const [guessedNumbers, setGuessedNumbers] = useState([]);
    const [dialog, setDialog] = useState();

    const thisRef = useRef(null);

    useEffect(() => {
        if (thisRef) {
            thisRef.current.focus();
            console.log("Focused");
        }
    }, [thisRef]);

    const setGuessSafe = (num) => {
        num = String(num).slice(0, 4);
        setCurrentGuess(num);
    };

    const addGuessedItem = (item) => {
        if ([...guessedNumbers].length === 0) {
            const now = Date.now();
            setStartTime(now);
        }
        setGuessedNumbers((current) => [...current, item]);
    };

    const startNewGame = () => {
        setCurrentGuess("");
        setGuessedNumbers([]);
        setNumber(generateValidNumber());
    };

    const handleKeyDown = (e) => {
        // e.preventDefault();
        const keyCodes = {
            Enter: 13,
            BackSpace: 8,
        };
        // console.log(e.keyCode);
        if (e.keyCode === keyCodes.Enter) {
            addGuessToList(
                currentGuess,
                number,
                addGuessedItem,
                setGuessSafe,
                setDialog
            );
            console.log(currentGuess);
        } else if (e.keyCode === keyCodes.BackSpace) {
            const safeCurrentGuess = String(currentGuess);
            setGuessSafe(
                safeCurrentGuess.slice(0, safeCurrentGuess.length - 1)
            );
        } else {
            const current = e.key;
            if (current >= "0" && current <= "9") {
                if (currentGuess.includes(String(current))) {
                    // TODO Shake it Off
                    return;
                }
                setGuessSafe(currentGuess + String(current));
            }
        }
    };

    return (
        <GlobalContext.Provider
            value={{
                number,
                setNumber,
                setGuessSafe,
                guessedNumbers,
                setGuessedNumbers,
                currentGuess,
                setCurrentGuess,
                dialog,
                setDialog,
                startNewGame,
                addGuessedItem,
                startTime,
            }}
        >
            {dialog || ""}
            <AppStyled tabIndex={1} ref={thisRef} onKeyDown={handleKeyDown}>
                <Header />
                <GamePlay />
                <NumBar />
            </AppStyled>
        </GlobalContext.Provider>
    );
};

export default App;
