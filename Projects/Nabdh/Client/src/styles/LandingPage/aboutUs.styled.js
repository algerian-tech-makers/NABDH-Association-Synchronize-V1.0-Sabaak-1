import styled from "styled-components";

export const AboutUsContainer = styled.section`
	width: 100%;
	height: 350px;
	padding: 20px 20px 0 20px;
	justify-content: space-evenly;
	align-items: center;
	background-color: var(--secondary-bgc);
	z-index: 1;
`;

export const AboutUsContent = styled.div`
	max-width: 400px;
	height: 300px;
	direction: rtl;
	padding: 0 30px;
	background-color: var(--secondary-bgc);
	align-items: baseline;
	justify-content: space-around;

	h1 {
		font-size: 2.5rem;
		font-weight: bold;
		margin-bottom: 30px;
	}
	.description {
		height: 150px;
		text-align: justify;
		font-size: 1.2rem;
		line-height: 1.5rem;
		overflow: hidden;
		text-overflow: ellipsis;
		word-wrap: break-word;
	}
`;

export const AboutUsIllustration = styled.div`
	width: 400px;
	height: 350px;
	background-color: transparent;
	bottom: -10px;
	@media (max-width: 800px) {
		display: none;
	}
	img {
		width: 100%;
		height: 100%;
		border-radius: 50px;
		box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
	}
`;
