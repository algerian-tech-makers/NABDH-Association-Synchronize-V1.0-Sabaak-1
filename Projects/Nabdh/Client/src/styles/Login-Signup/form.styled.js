import styled from "styled-components";

export const Container = styled.div`
	width: 100vw;
	padding: 20px 0;
	align-items: center;
	justify-content: center;
`;

export const FormContainer = styled.div`
	width: 80%;
	max-width: 800px;
	align-items: center;
	justify-content: center;
`;

export const FormHeader = styled.div`
	width: 100%;
	height: 80px;
	align-items: flex-end;
`;

export const Choices = styled.div`
	width: ${({ active }) => (active ? "60%" : "40%")};
	height: ${({ active }) => (active ? "100%" : "80%")};
	color: ${({ active }) => (active ? "var(--secondary-color)" : "var(--primary-color)")};
	background-color: ${({ active }) =>
		active ? "var(--primary-color)" : "var(--secondary-color)"};
	border: ${({ active }) => (active ? "1px solid var(--secondary-color)" : "none")};
	border-bottom: ${({ active }) => (active ? "none" : "1px solid var(--secondary-color)")};
	border-radius: 5px 5px 0 0;
	align-items: center;
	justify-content: center;
	cursor: ${({ active }) => (active ? "default" : "pointer")};
	transition: all 200ms ease-out;
	p {
		transform: ${({ active }) => (active ? "scale(1.6)" : null)};
		transition: transform 300ms ease-out;
	}
`;
export const FormBody = styled.form`
	width: 100%;
	align-items: center;
	border: 1px solid var(--secondary-color);
	border-top: ${({ type }) => (type === "onboarding" ? "" : "none")};
	border-radius: 0 0 5px 5px;
	background-color: var(--primary-color);
	padding: 20px;
`;
export const SubmitButton = styled.button`
	width: 60%;
	color: var(--primary-color);
	background-color: var(--secondary-color);
`;
