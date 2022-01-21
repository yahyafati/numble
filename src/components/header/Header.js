import React from "react";
import styled from "styled-components";

const HeaderStyled = styled.header`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    font-weight: 500;

    h1 {
        letter-spacing: 0.5rem;
        font-size: 3rem;
        color: #ffa800;
    }

    /* .menu {
        display: flex;
        justify-content: right;
        gap: 0.25rem;

        .menu-item {
            cursor: pointer;
            font-size: 1.5rem;
            color: #aaa;

            &:hover {
                color: #ccc;
            }

            &:active {
                color: #eee;
            }
        }
    } */
`;

const Header = () => {
    return (
        <HeaderStyled>
            <h1>NUMBLE</h1>
            {/* <div className="menu">
                <a>
                    <RiNumbersFill className="menu-item" />
                </a>
                <a>
                    <RiSettings5Fill className="menu-item" />
                </a>
            </div> */}
        </HeaderStyled>
    );
};

export default Header;
