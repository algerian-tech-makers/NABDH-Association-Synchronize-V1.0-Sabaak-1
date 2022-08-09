import styled from "styled-components";

export const SideBarContainer = styled.div`
	width: 250px;
	height: 100%;
	padding: 30px 0;
	background-color: var(--secondary-color);
	border-radius: 20px;
`;
export const ProfileSection = styled.div`
	width: 100%;
	height: 200px;
	justify-content: space-around;
	align-items: center;
	color: var(--primary-color);

	.profile-pic {
		width: 80px;
		height: 80px;
		border-radius: 50%;

		img {
			width: 100%;
			height: 100%;
			border-radius: 50%;
			border: 3px solid var(--primary-color);
		}
	}
`;
export const MainMenue = styled.div`
	width: 100%;
	top: 30px;
	justify-content: space-around;
`;
export const Settings = styled.div`
	width: 100%;
	position: absolute;
	justify-content: space-around;
	bottom: 50px;
`;
export const List = styled.div`
	width: calc(100% - 30px);
	height: 30px;
	right: 30px;
	padding: 0 10px;
	border-radius: 0 15px 15px 0;
	align-items: center;
	justify-content: start;
	cursor: pointer;
	color: ${({ active }) => (active ? "var(--secondary-color)" : "var(--primary-color)")};
	background-color: ${({ active }) => (active ? "var(--secondary-bgc)" : null)};
	i {
		margin-left: 20px;
	}
	::before {
		border-radius: 15pc;
	}
`;
