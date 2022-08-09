import styled from "styled-components";

export const HeaderContainer = styled.header`
	width: 100%;
	height: 60px;
	overflow: hidden;
	background-color: var(--secondary-color);
	align-items: center;
`;
export const HeaderLogo = styled.div`
	height: 40px;
	width: 40px;
	left: 20px;
	background-color: var(--primary-color);
	border-radius: 50%;
	align-items: center;
	justify-content: center;
	p {
		font-family: "Ruqaa-bold", "cursive";
		font-size: 20px;
		color: var(--secondary-color);
	}
`;

export const HeaderNav = styled.nav`
	width: 100%;
	height: auto;
	justify-content: right;
	right: 20px;
	a {
		color: var(--primary-color);
		padding: 12px;
		border-radius: 4px;
		:hover {
			background-color: var(--third-color);
		}
		p {
			font-size: 1.5rem;
		}
	}
`;
