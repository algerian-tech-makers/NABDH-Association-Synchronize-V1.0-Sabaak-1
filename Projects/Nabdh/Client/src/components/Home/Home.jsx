import React from "react";
import { ListWidget, HomeHeader } from "./";
import { HomeContainer, HomeWidgets } from "../../styles/Home";

const Home = () => {
	return (
		<HomeContainer>
			<HomeHeader />
			<HomeWidgets>
				<ListWidget />
			</HomeWidgets>
		</HomeContainer>
	);
};

export default Home;
