import styled from "styled-components";

export const InputContainer = styled.div`
	width: 60%;
	height: 80px;
	direction: rtl;
	justify-content: space-evenly;
	input {
		position: absolute;
		height: 50%;
		border-color: var(--secondary-color);
	}
	select {
		height: 50%;
		padding: 0 10px;
		border-color: var(--secondary-color);
		background-color: transparent;
		border-radius: 5px;
	}
	label {
		position: absolute;
		right: 10px;
		transform: ${({ inputActive }) => (inputActive ? "translateY(-35px) scale(0.9)" : null)};
		transition: all 200ms ease-in-out;
	}
`;
