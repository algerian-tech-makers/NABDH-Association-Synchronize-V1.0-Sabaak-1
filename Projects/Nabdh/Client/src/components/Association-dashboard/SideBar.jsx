import {
	SideBarContainer,
	ProfileSection,
	MainMenue,
	Settings,
	List,
} from "../../styles/AssociationDashboard";

export default function SideBar({ association }) {
	return (
		<SideBarContainer className='display-f flex-c'>
			<ProfileSection className='display-f flex-c'>
				<div className='profile-pic'>
					<img
						src='https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png'
						alt='profile'
					/>
				</div>
				<h1>{association?.name || "name"}</h1>
				<p>{association?.email || "email"}</p>
				<p>{association?.adress || "adress"}</p>
				<p>{association?.phone || "phone"}</p>
			</ProfileSection>
			<MainMenue className='display-f flex-c'>
				<List className='display-f' active>
					<i className='fa-solid fa-house'></i>
					<p>لوحة القيادة</p>
				</List>
				<List className='display-f'>
					<i className='fa-solid fa-calendar-check'></i>
					<p>الأحداث</p>
				</List>
				<List className='display-f'>
					<i className='fa-solid fa-message'></i>
					<p>الرسائل</p>
				</List>
			</MainMenue>
			<Settings className='display-f flex-c'>
				<List className='display-f'>
					<i className='fa-solid fa-gear'></i>
					<p>الإعدادات</p>
				</List>
				<List className='display-f'>
					<i className='fa-solid fa-arrow-right-from-bracket'></i>
					<p>تسجيل الخروج</p>
				</List>
			</Settings>
		</SideBarContainer>
	);
}
