import { EventsCardsInfo } from "../../assets/landingPage";
import { EventsContainer, EventsCardContainer } from "../../styles/LandingPage";

export default function Events() {
	return (
		<EventsContainer className='display-f flex-c'>
			<h1>الاحداث القادمة</h1>
			<p>نتصف لإعادة وإعلان حين هو, أضف حقول الذود بالرّد عل. انه بحشد شعار اليابان، نر</p>

			<div className='cards-container display-f'>
				{EventsCardsInfo.map((card, i) => (
					<EventCard key={`event${i}`} card={card} />
				))}
			</div>
		</EventsContainer>
	);
}

function EventCard({ card }) {
	return (
		<EventsCardContainer className='display-f flex-r'>
			<div>
				<img src={card.imgUrl} alt='event img' />
			</div>
			<div>
				<h1>{card.title}</h1>
				<p>
					<i className='fa-regular fa-clock'></i>
					{card.date}
				</p>
				<p>
					<i className='fa-solid fa-location-dot'> </i>
					{card.address}
				</p>

				<p>{card.description}</p>
			</div>
		</EventsCardContainer>
	);
}
