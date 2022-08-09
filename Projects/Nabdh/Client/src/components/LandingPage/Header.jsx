import { HeaderContainer, HeaderLogo, HeaderNav } from "../../styles/LandingPage";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
	const { user } = useSelector((state) => state.authslice);

	return (
		<HeaderContainer className='display-f'>
			<HeaderLogo className=' display-f'>
				<p>نبض</p>
			</HeaderLogo>
			<HeaderNav className='display-f'>
				<Link to=''>
					<p>حول</p>
				</Link>
				<Link to=''>
					<p>دوافعنا</p>
				</Link>
				<Link className='active' to=''>
					<p>الرئيسية</p>
				</Link>
				{!user ? (
					<Link to='/signup'>
						<p>تسجيل</p>
					</Link>
				) : (
					<Link to={`/association/${user.id}`}>
						<p>{user.name}</p>
					</Link>
				)}
			</HeaderNav>
		</HeaderContainer>
	);
}
