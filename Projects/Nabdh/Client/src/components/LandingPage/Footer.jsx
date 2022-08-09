import {
	FooterContainer,
	UpperFooterContainer,
	DownFooterContainer,
	FooterLogo,
} from "../../styles/LandingPage";

export default function Footer() {
	return (
		<FooterContainer>
			<UpperFooterContainer className='display-f'>
				<div className='social'>
					<h1>مواقع التواصل الاجتماعي</h1>

					<p>يمكنكم داىما زيارة مقرنا او التقرب من مصالح فريق نب</p>
					<section>
						<i className='fa-brands fa-facebook'></i>
						<i className='fa-brands fa-twitter'></i>
						<i className='fa-brands fa-instagram'></i>
						<i className='fa-brands fa-pinterest'></i>
					</section>
				</div>
				<div className='contact'>
					<p>يمكنكم داىما زيارة مقرنا او التقرب من مصالح فريق نبض </p>
					<br />
					<i className='fa-solid fa-location-dot'> شارع السلام لعمارة</i>
					<br />
					<i className='fa-solid fa-phone'> 058123466 </i>
					<br />
					<i className='fa-regular fa-envelope'> nabdh@lsms.com</i>
					<br />
				</div>
				<div className='logo'>
					<FooterLogo>
						<p>نبض</p>

						<div className='logodes'>
							<p>يمكنكم داىما زيارة مقرنا او التقرب من مصالح فريق نبض </p>{" "}
						</div>
					</FooterLogo>
				</div>
			</UpperFooterContainer>
			<DownFooterContainer className='display-f'>
				<p>
					{" "}
					الحقوق محفوطة <code> فريق نبض </code>{" "}
				</p>
			</DownFooterContainer>
		</FooterContainer>
	);
}
