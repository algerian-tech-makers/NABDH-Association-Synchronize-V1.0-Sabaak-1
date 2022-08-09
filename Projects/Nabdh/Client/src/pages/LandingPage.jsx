import { Header, Main, AboutUs, Stats, Causes, Events,Footer} from "../components/LandingPage";
import { Container } from "../styles/LandingPage";
import { aboutUs } from "../assets/landingPage";

export default function LandingPage() {
	return (
		<Container>
			<Header />
			<Main />
			<AboutUs data={aboutUs} />
			<Stats />
			<Causes />
			<Events />
			<Footer/>
		</Container>
	);
}
