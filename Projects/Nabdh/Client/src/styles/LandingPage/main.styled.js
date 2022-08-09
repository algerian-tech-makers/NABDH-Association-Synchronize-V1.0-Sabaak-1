import styled from "styled-components";
import nabdh_banner1 from "../../assets/images/nabdh_banner.jpeg";
import nabdh_banner2 from "../../assets/images/aboutUs-illustration.png";

export const MainContainer = styled.section`
	display: flex;
	width: 100%;
	height: calc(100vmin - 60px);
	position: relative;
`;
export const MainContent = styled.div`
	width: 100%;
	height: 100%;
	padding: 0 20px;
	position: absolute;
	direction: rtl;
	align-items: center;
	justify-content: space-evenly;
	z-index: 1;

	i {
		width: 40px;
		text-align: center;
		color: var(--secondary-color);
		transition: all 200ms ease-in;

		:hover {
			opacity: 0.8;
			cursor: pointer;
			font-size: 2.5em;
		}
	}
`;
export const StyledDescription = styled.div`
	padding: 0 20px;
	color: var(--secondary-color);
	flex-grow: 1;
	h1 {
		font-size: 25pt;
		margin-bottom: 20px;
	}
	p {
		max-width: 450px;
		font-size: 20pt;
		margin-bottom: 20px;
	}
`;
export const StyledImageSlider = styled.div`
	position: absolute;
	background-image: ${({ imgUrl }) =>
		imgUrl === 1 ? `url(${nabdh_banner1})` : `url(${nabdh_banner2})`};
	width: 100%;
	height: 100%;
	transition: background-image 200ms ease-in;
	background-size: 100% 100%;
	background-repeat: no-repeat;
`;
