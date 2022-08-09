import { CausesData } from "../../assets/landingPage";
import {
	CausesContainer,
	CausesCardsContainer,
	CausesCardContainer,
	ProgressBar,
	FundraiseGoal,
	CauseDescription,
} from "../../styles/LandingPage";
import { LandingButton } from "../Reusable-components";

export default function Causes() {
	return (
		<CausesContainer className='display-f flex-c'>
			<h1>دوافعنا</h1>
			<p>
				من اجل تجريب هذا الخط والاتفاق مع التصميم تكتب بعض الكلمات للتاكد من شكل التصميم
				الحالي هكذا
			</p>
			<CausesCardsContainer>
				{CausesData.map((cause, i) => (
					<CausesCards key={`cause${i}`} data={cause} />
				))}
			</CausesCardsContainer>
		</CausesContainer>
	);
}

function CausesCards({ data }) {
	let percentage = "30%";
	let { imgUrl, raised, goal, title, body } = data;
	return (
		<CausesCardContainer className='display-f flex-c'>
			<img src={imgUrl} alt='' />
			<ProgressBar>
				<div className='percentage' style={{ right: percentage }}>
					{percentage}
				</div>
				<div className='bar backgroundDiv'></div>
				<div className='bar progressDiv' style={{ width: percentage }}></div>
			</ProgressBar>
			<FundraiseGoal className='display-f'>
				<p>المجموع:{raised}</p>
				<p>الهدف:{goal}</p>
			</FundraiseGoal>
			<CauseDescription>
				<h1>{title}</h1>
				<p>{body}</p>
			</CauseDescription>
			<LandingButton name={"تبرع اﻵن"} />
		</CausesCardContainer>
	);
}
