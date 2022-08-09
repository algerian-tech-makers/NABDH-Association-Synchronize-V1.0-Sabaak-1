import { AboutUsContainer, AboutUsContent, AboutUsIllustration } from "../../styles/LandingPage";
import { LandingButton } from "../Reusable-components";
import ilusrationPic from "../../assets/images/aboutUs-illustration.png";

export default function AboutUs({ data }) {
	return (
		<AboutUsContainer className='display-f flex-r'>
			<AboutUsIllustration>
				<img src={ilusrationPic} alt='illustration' />
			</AboutUsIllustration>
			<AboutUsContent className='display-f flex-c'>
				<h1>{data.title}</h1>
				<p className='description'>{data.paragraph}</p>
				<LandingButton name={"Read more"} />
			</AboutUsContent>
		</AboutUsContainer>
	);
}
