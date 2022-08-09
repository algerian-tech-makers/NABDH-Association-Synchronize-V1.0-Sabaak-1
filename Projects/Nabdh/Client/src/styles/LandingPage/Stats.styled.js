import styled from "styled-components";

export const StatsContainer = styled.section`
	width: 100%;
	padding: 50px;
	align-items: center;
	justify-content: space-evenly;
	flex-wrap: wrap;
	direction: rtl;
`;
export const CardContainer = styled.div`
	width: 250px;
	height: 200px;
	margin-bottom: 10px;
	border-radius: 5px;
	box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.2);
	align-items: center;
	justify-content: space-evenly;
	color: var(--secondary-color);
	i {
		font-size: 2rem;
	}
	h1 {
		color: black;
		font-size: 1.5rem;
	}
	h2 {
		font-size: 1.2rem;
	}
`;
