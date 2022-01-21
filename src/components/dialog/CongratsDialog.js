import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../../context/GlobalContext";
import DialogContainer from "./DialogContainer";
import CelebrateSVG from "../../images/celebrate.svg";

const DialogStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    padding: 1rem 2rem;
    min-width: 20rem;
    min-height: 20rem;
    border-radius: 1rem;
    background-color: #248834;
    color: white;
    box-shadow: 2px 2px 5px #248834;

    .compliment {
        letter-spacing: 4px;
        text-transform: uppercase;
    }
    .congrats-img {
        width: 10rem;
        height: 10rem;
    }

    .stat-container {
        align-self: flex-start;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
`;

const StatItemStyled = styled.div`
    display: flex;
    gap: 1rem;

    .label {
        text-transform: uppercase;
        font-weight: 500;
    }

    .stat {
        font-weight: 300;
    }

    .percentile {
        color: gold;
        font-weight: 500;
    }
`;

const WIN_COMPLIMENTS = {
    1: [
        "Incredible",
        "Extraordinary",
        "Unreal",
        "Perfect",
        "Lucky",
        "First-rate",
    ],
    2: ["Great", "Genius", "Lucky", "Terrific", "Exceptional"],
    3: ["Wonderful", "Terrific", "Awesome", "Absolute"],
    4: ["Brilliant", "Hard-worker", "Fantastic", "Excellent", "Superb"],
    5: ["Good", "Marvelous", "Beautiful", "Amazing", "Stunning"],
    6: ["Proper", "Fine", "Positive"],
    7: ["Satisfactory"],
};

const CongratsDialog = () => {
    const { guessedNumbers, startNewGame, startTime } =
        useContext(GlobalContext);

    const getCompliment = () => {
        let len = [...guessedNumbers].length;
        if (len > 7) len = 7;
        else if (len < 1) len = 1;
        const words = WIN_COMPLIMENTS[len];
        return words[parseInt(Math.random() * words.length)];
    };

    const getDuration = () => {
        const now = Date.now();
        const duration = (now - startTime) / 1000.0;
        return duration.toFixed(2);
    };

    return (
        <DialogContainer
            content={
                <DialogStyled>
                    <img
                        className="congrats-img"
                        src={CelebrateSVG}
                        alt="Congrats, you've won"
                    />
                    <h1 className="compliment">{getCompliment()}</h1>
                    <div className="stat-container">
                        <StatItemStyled>
                            <div className="label">Tries</div>
                            <div className="stat">
                                {[...guessedNumbers].length}{" "}
                                {[...guessedNumbers].length > 1
                                    ? "tries"
                                    : "try"}
                            </div>
                            {/* <div className="percentile">Top 5%</div> */}
                        </StatItemStyled>

                        <StatItemStyled>
                            <div className="label">Time</div>
                            <div className="stat">{getDuration()} Seconds</div>
                        </StatItemStyled>
                    </div>
                </DialogStyled>
            }
            onClose={startNewGame}
        />
    );
};

export default CongratsDialog;
