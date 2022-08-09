import styled from "styled-components";

export const StyledModal = styled.div`
    .darkBG {
        background-color: rgba(0, 0, 0, 0.2);
        width: 100vw;
        height: 100vh;
    }

    .centered {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
    }

    .modal {
        width: 500px;
        height: 500px;
        background: white;
        color: white;
        border-radius: 16px;
        box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
        button i {
            color: var(--secondary-color);
        }
    }

    .modalHeader {
        width: 100%;
        height: 100%;
        background: white;
        overflow: hidden;
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;

        form {
            width: 100%;
            height: 100%;
            background-color: var(--third-color);
            button {
                transform: translate(-50%, -50%);
                top: 20%;
                right: 35%;
            }
        }
    }

    .heading {
        margin: 0;
        padding: 10px;
        color: var(--secondary-color);
        font-size: 18px;
        text-align: center;
    }

    .closeBtn {
        cursor: pointer;
        font-weight: 500;
        padding: 4px 8px;
        border-radius: 8px;
        border: none;
        font-size: 18px;
        color: #2c3e50;
        background: white;
        transition: all 0.25s ease;
        box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.06);
        position: absolute;
        right: 0;
        top: 0;
        align-self: flex-end;
        margin-top: -7px;
        margin-right: -7px;
    }

    .closeBtn:hover {
        box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
        transform: translate(-4px, 4px);
    }
`;
