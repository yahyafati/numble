import React from "react";
import styled from "styled-components";
import DeleteKey from "./DeleteKey";
import EnterKey from "./EnterKey";
import NumberKey from "./NumberKey";

const NumBarStyled = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
`;

const NumBar = () => {
    return (
        <NumBarStyled>
            {[...Array(9)].map((_, i) => (
                <NumberKey key={i} num={i + 1} />
            ))}
            <DeleteKey />
            <NumberKey num={0} />
            <EnterKey />
        </NumBarStyled>
    );
};

export default NumBar;
