import styled from "styled-components";

export const FooterContainer = styled.footer`
    background-color: var(--secondary-bgc);
    width: 100%;
    height: 200px;
    margin-top: 160px;
    align-items: center;
`;
export const UpperFooterContainer = styled.div`
    padding-top: 5px;
    width: 100%;
    height: 60%;
    flex-direction: row;
    margin-bottom: 40px;

    div:first-child {
        // social
        h1 {
            margin-left: 25%;
            margin-bottom: 30px;
            color: black;
        }
    }

    .social {
        section {
            padding: 5px;
            font-size: 20px;
            transform: translate(25%, 0px);
            i {
                margin: 3px;
            }
        }
        p {
            margin-left: 30px;
        }
    }

    .contact {
        margin-left: 55px;

        p {
            margin: 0px 45px;
        }
        i {
            margin-left: 125px;
        }
    }

    div {
        margin-top: 50px;
        padding: 10px;
        flex-direction: column;
        width: 33%;
        color: grey;
        h1 {
            color: black;
        }

        div:last-child {
            // logo
            //overide the logo width
            margin-top: -30px;
            width: 60px;
            left: 260px;
            margin-bottom: 25px;
            background-color: var(--primary-color);
            border-radius: 50%;
            align-items: center;
            justify-content: center;
            p:first-child {
                font-family: "Ruqaa-bold", "cursive";
                font-size: 30px;
                color: var(--secondary-color);
            }
        }
    }
`;

export const DownFooterContainer = styled.div`
    padding-top: 5px;
    width: 100%;
    height: 30%;
    flex-direction: row;
    justify-content: center;
    p {
        font-family: "Ruqaa-bold", "cursive";
        font-size: 20px;
    }
`;


export const FooterLogo = styled.div`
    height: 60px;
    width: 60px;
    .logodes {
        margin-bottom: 0px !important;
        margin-left: -30px !important;
        left: 0px !important;
        top: 71px !important;
        background-color: var(--secondary-bgc) !important;
        width: 200px !important;
        height: 30px !important;
        border-radius: 0% !important;

        p {
            font-family: "lateef", "cursive" !important;
            font-size: 1.1rem !important;
            color: gray !important;
            margin-left: -100px !important;
        }
    }
`;

