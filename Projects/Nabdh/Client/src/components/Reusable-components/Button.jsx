import React from "react";
import { StyledButton } from "../../styles/LandingPage/button.styled";
export default function LandingButton({ name }) {
	return (
		<StyledButton>
			<p>{name}</p>
		</StyledButton>
	);
}
