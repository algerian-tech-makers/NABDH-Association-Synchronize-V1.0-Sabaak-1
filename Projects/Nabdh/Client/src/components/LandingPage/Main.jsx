import {
	MainContainer,
	MainContent,
	StyledDescription,
	StyledImageSlider,
} from "../../styles/LandingPage";
import { LandingButton } from "../Reusable-components";
import { useState } from "react";

export default function Main() {
	const [image, setImage] = useState(1);
	function changeImg() {
		image === 1 ? setImage(2) : setImage(1);
	}
	return (
		<MainContainer>
			<StyledImageSlider imgUrl={image} />
			<MainContent className='display-f flex-r'>
				<i className='fa-solid fa-angle-right fa-2x' onClick={changeImg}></i>
				<StyledDescription>
					<h1>كن متطوعا </h1>
					<p>
						من اجل تجريب هذا الخط والاتفاق مع التصميم تكتب بعض الكلمات للتاكد من شكل
						التصميم الحالي هكذا
					</p>
					<LandingButton name={"انظم الينا"} />
				</StyledDescription>
				<i className='fa-solid fa-angle-left fa-2x' onClick={changeImg}></i>
			</MainContent>
		</MainContainer>
	);
}
