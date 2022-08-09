import styled from "styled-components";

export const CausesContainer = styled.section`
	width: 100%;
	padding: 40px 0;
	align-items: center;
	direction: rtl;
	h1 {
		color: var(--secondary-color);
		font-size: 3rem;
		margin-bottom: 30px;
	}
	p {
		font-size: 1.6rem;
	}
`;
export const CausesCardsContainer = styled.div`
	width: 100%;
	padding: 0 30px;
	margin-top: 30px;
`;

export const CausesCardContainer = styled.div`
	width: 300px;
	align-items: baseline;
	img {
		width: 100%;
		height: 250px;
		border-radius: 10px;
		margin-bottom: 10px;
	}
`;

export const ProgressBar = styled.div`
	width: 100%;
	height: 30px;
	.percentage {
		padding: 0 7px;
		position: absolute;
		height: 17px;
		border-radius: 5px;
		background-color: var(--secondary-color);
		margin-right: -15px;
		color: var(--primary-color);
		font-size: small;
		text-align: center;
		line-height: 17px;
	}
	.bar {
		position: absolute;
		height: 7px;
		bottom: 0;
		border-radius: 5px;
	}
	.backgroundDiv {
		width: 100%;
		background-color: var(--secondary-bgc);
	}
	.progressDiv {
		background-color: var(--secondary-color);
	}
`;
export const FundraiseGoal = styled.div`
	width: 100%;
	height: 30px;
	justify-content: space-between;
	padding: 10px 0;
	p {
		font-size: 1.2rem;
	}
`;
export const CauseDescription = styled.div`
	width: 100%;
	height: 150px;
	padding: 20px 0;
	h1 {
		font-size: 1.4rem;
		margin-bottom: 30px;
	}
	p {
		font-size: 1.2rem;
	}
`;
