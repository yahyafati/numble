import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../../context/GlobalContext";

const DialogContainerStyled = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: #33333333;

    z-index: 100;

    display: flex;
    align-items: center;
    justify-content: center;
`;

const DialogContainer = ({ content, onClose = () => {} }) => {
    const { setDialog } = useContext(GlobalContext);
    const handleClick = (e) => {
        e.preventDefault();
        if (e.target.id !== "id_dialog_container") {
            return;
        }
        // Close Dialog
        onClose();
        setDialog(null);
    };

    return (
        <DialogContainerStyled id="id_dialog_container" onClick={handleClick}>
            {content}
        </DialogContainerStyled>
    );
};

export default DialogContainer;
