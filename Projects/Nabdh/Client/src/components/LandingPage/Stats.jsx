import { StatsCardsInfo } from "../../assets/landingPage";
import { StatsContainer, CardContainer } from "../../styles/LandingPage";

export default function Stats() {
	return (
		<StatsContainer className='display-f'>
			{StatsCardsInfo.map((card, i) => (
				<StatCard key={`stat${i}`} card={card} />
			))}
		</StatsContainer>
	);
}

function StatCard({ card }) {
	return (
		<CardContainer className='display-f flex-c'>
			{card.icon}
			<h1>{card.number}</h1>
			<h2>{card.title}</h2>
		</CardContainer>
	);
}
