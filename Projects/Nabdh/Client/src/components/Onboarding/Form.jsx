import { FormContainer, FormBody, SubmitButton } from "../../styles/Login-Signup";
import { Input } from "../Reusable-components";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Logo = styled(Link)`
	width: 50px;
	height: 50px;
	margin: 20px 0;
	border-radius: 50%;
	justify-content: center;
	align-items: center;
	color: var(--primary-color);
	background-color: var(--secondary-color);
	p {
		font-family: "Ruqaa";
	}
`;

export default function Form({ inputs, handleSubmit, handleData, formType }) {
	return (
		<FormContainer className='display-f flex-c'>
			<h1 style={{ fontSize: "1.5rem" }}>مرحبا بك في</h1>
			<Logo to={"/"} className=' display-f'>
				<p>نبض</p>
			</Logo>

			<FormBody onSubmit={handleSubmit} type={formType} className='display-f flex-c'>
				<p>يرجئ ملئ المعلومات التالية لإكمال التسجيل</p>

				{inputs.map((input, i) => (
					<Input key={`input${i}`} handleData={handleData} data={input} />
				))}
				<SubmitButton>
					<p dir='rtl'>إكمال التسجيل</p>
				</SubmitButton>
			</FormBody>
		</FormContainer>
	);
}
