import CongratsDialog from "../components/dialog/CongratsDialog";

export const getTypeSimilarity = (num, guess) => {
    let count = 0;
    const number = String(num);
    const currentGuess = String(guess);

    for (const c of currentGuess) {
        if (number.includes(c)) {
            count++;
        }
    }
    return count;
};

export const getPositionSimilarity = (num, guess) => {
    let count = 0;
    const number = String(num);
    const currentGuess = String(guess);
    for (let i = 0; i < currentGuess.length; i++) {
        if (currentGuess[i] === number[i]) {
            count++;
        }
    }
    return count;
};

export const isValid = (num) => {
    const currentGuess = String(num);
    return new Set(currentGuess).size === 4;
};

export const addGuessToList = (
    currentGuess,
    number,
    addGuessedItem,
    setGuessSafe,
    setDialog
) => {
    if (!isValid(currentGuess)) {
        return;
    }

    const item = {
        number: currentGuess,
        type: getTypeSimilarity(number, currentGuess),
        position: getPositionSimilarity(number, currentGuess),
    };
    addGuessedItem(item);
    setGuessSafe("");
    if (item.position === 4) {
        setDialog(<CongratsDialog />);
    }
};
