import { HomeHeaderContainer, EventButton } from "../../styles/Home";
import Modal from "./Modal";
import { useState } from "react";
export default function HomeHeader() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<HomeHeaderContainer className='display-f'>
			<EventButton value={"اظف حدث"} onClick={() => setIsOpen(true)} />
			{isOpen && <Modal setIsOpen={setIsOpen} />}
		</HomeHeaderContainer>
	);
}
