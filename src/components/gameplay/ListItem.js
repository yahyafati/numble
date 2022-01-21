import React from "react";
import styled from "styled-components";
import { CurrentResultItem, NumberItem, PositionItem, TypeItem } from "./Item";

const ListItemStyled = styled.div`
    display: flex;
    gap: 8px;
`;

const ListItem = ({ item }) => {
    return (
        <ListItemStyled>
            {[...item["number"]].map((x) => (
                <NumberItem num={x} />
            ))}
            <TypeItem num={item["type"]} />
            <PositionItem num={item["position"]} />
        </ListItemStyled>
    );
};

export const CurrentGuessListItem = ({ current }) => {
    if (!current) {
        current = "";
    }
    current = current.slice(0, 4);
    while (current.length < 4) {
        current += " ";
    }
    return (
        <ListItemStyled>
            {[...current].map((x, i) => (
                <NumberItem key={i} num={x} />
            ))}
            <CurrentResultItem />
            <CurrentResultItem />
        </ListItemStyled>
    );
};

export default ListItem;
