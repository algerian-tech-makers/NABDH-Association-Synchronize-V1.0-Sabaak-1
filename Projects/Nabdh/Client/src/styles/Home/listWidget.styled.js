import styled from "styled-components";

export const ListWidgetContainer = styled.div`
    flex: 4;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    padding: 20px;
`;
export const ListWidgetTitle = styled.h3`
    font-size: 22px;
    font-weight: 600;
`;

export const ListWidgetTable = styled.table`
    width: 100%;
    border-spacing: 20px;
    i {
        margin: 0px 5px;
        .fa-edit {
            color: var(--secondary-color);
        }
        .fa-trash-can {
            color: red;
        }
    }
`;
export const ListWidgetTh = styled.th`
    text-align: left;
`;
export const ListWidgetUser = styled.td`
    display: flex;
    align-items: center;
    font-weight: 600;
`;
export const ListWidgetImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
`;
export const LightTd = styled.td`
    font-weight: 300;
`;
