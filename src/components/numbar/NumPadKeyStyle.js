import styled from "styled-components";

const NumberKeyStyled = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: inherit;
    color: inherit;
    cursor: pointer;

    font-size: 1rem;

    width: 3.5rem;
    height: 3.5rem;

    border: 2px solid #444;
    border-radius: 0.25rem;

    &:focus {
        outline: 1px solid #444;
    }

    &:active {
        transform: scale(0.98);
    }
`;

export default NumberKeyStyled;
