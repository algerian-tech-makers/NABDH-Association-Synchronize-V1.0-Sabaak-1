import styled from "styled-components";
export const HomeContainer = styled.div`
    flex: 2;
`;
export const HomeWidgets = styled.div`
    display: flex;
    margin: 20px;
`;

export const HomeHeaderContainer = styled.header`
    width: 100%;
    height: 20%;
`;

export const EventButton = styled.button`
    padding: 0px 25px;
    position: absolute;
    right: 20px;
    top: 15px;
    background-color: var(--secondary-color);
    color: var(--primary-color);
    height: 40px;
    border-radius: 20px;

    :after {
        content: "اضف حدثا";
        font-family: "Ruqaa", "cursive";
        cursor: pointer;
        font-size: 20px;
        padding-bottom: 25px;
    }

    :hover {
        opacity: 0.8;
    }
`;
