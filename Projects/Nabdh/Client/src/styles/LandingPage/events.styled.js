import styled from "styled-components";

export const EventsContainer = styled.section`
	width: 100%;
	background-color: var(--primary-bgc);
	align-items: center;
	direction: rtl;

	h1 {
		margin: 12px 0px;
		padding-bottom: 12px;
		font-size: 3rem;
		color: var(--secondary-color);
	}
	p {
		font-size: 1.5rem;
	}

	.cards-container {
		flex-wrap: wrap;
		padding: 40px 0;
		justify-content: space-around;
	}
`;
export const EventsCardContainer = styled.div`
	width: 450px;
	height: 200px;
	margin-bottom: 30px;

	div {
		width: 50%;
		height: 100%;
		margin-right: 10px;
		img {
			width: 100%;
			height: 100%;
			padding: 10px;
			border-radius: 20px;
		}
	}
	h1 {
		margin-top: 20px;
		padding: 5px 0px;
		color: black;
		font-size: 1.5rem;
	}
	p {
		font-size: 1.2rem;
		i {
			font-size: medium;
			color: var(--secondary-color);
			padding: 5px;
		}
	}
`;
