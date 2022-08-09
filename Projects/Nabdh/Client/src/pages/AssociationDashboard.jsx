import { SideBar } from "../components/Association-dashboard";
import {Home} from "../components/Home";
import { Container } from "../styles/AssociationDashboard";

export default function AssociationDashboard() {
	return (
		<Container className='display-f'>
			<SideBar />
			<Home/>
		</Container>
	);
}
