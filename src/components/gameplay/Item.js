import React from "react";
import styled from "styled-components";

const NumberItemStyled = styled.div`
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 3rem;
    height: 3rem;
    border-radius: 0.25rem;

    background-color: inherit;
    box-shadow: 0.5px 0.5px 0.5px #444;
    border: 1px solid #444;

    .tooltip_text {
        display: inline-block;
        width: fit-content;
        visibility: hidden;

        top: -100%;
        font-size: 80%;
        background-color: #333;
        padding: 4px;
        border-radius: 5px;

        position: absolute;
        z-index: 1;
    }

    &:hover .tooltip_text {
        visibility: visible;
    }
`;

const TypeItemStyled = styled(NumberItemStyled)`
    background-color: #ffa800;
    box-shadow: none;
    border: none;
`;

const PositionItemStyled = styled(NumberItemStyled)`
    background-color: #248834;
    box-shadow: none;
    border: none;
`;

const CurrentResultItemStyled = styled(NumberItemStyled)`
    background-color: inherit;
    box-shadow: 0.5px 0.5px 0.5px #444;
    border: 1px solid #444;
    color: #333;
`;

const Item = ({ num, typeResult = false, positionResult = false }) => {
    if (typeResult && positionResult) {
        throw Error("It can't be both.");
    }
    return <NumberItemStyled>{num}</NumberItemStyled>;
};

export const NumberItem = ({ num }) => {
    return <NumberItemStyled>{num}</NumberItemStyled>;
};

export const TypeItem = ({ num }) => {
    return (
        <TypeItemStyled>
            {num}
            <span className="tooltip_text">Correct Digits</span>
        </TypeItemStyled>
    );
};

export const PositionItem = ({ num }) => {
    return (
        <PositionItemStyled>
            {num}
            <span className="tooltip_text">Correct Position</span>
        </PositionItemStyled>
    );
};

export const CurrentResultItem = () => {
    return <CurrentResultItemStyled>?</CurrentResultItemStyled>;
};

export default Item;
