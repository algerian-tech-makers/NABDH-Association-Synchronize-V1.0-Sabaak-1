import {
	FormContainer,
	FormHeader,
	Choices,
	FormBody,
	SubmitButton,
} from "../../styles/Login-Signup";

import { Input } from "../Reusable-components";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
	text-decoration: underline;
	color: var(--secondary-color);
`;
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

export default function Form({
	inputs,
	handleSubmit,
	handleData,
	formType,
	userType,
	setUserType,
}) {
	return (
		<FormContainer className='display-f flex-c'>
			<h1 style={{ fontSize: "1.5rem" }}>مرحبا بك في</h1>
			<Logo to={"/"} className=' display-f'>
				<p>نبض</p>
			</Logo>
			<FormHeader className='display-f'>
				<Choices
					onClick={() => setUserType("Associations")}
					className='display-f'
					active={userType === "Associations"}
				>
					{formType === "signup" ? <p dir='rtl'>سجل كجمعية</p> : <p dir='rtl'> جمعية</p>}
				</Choices>
				<Choices
					onClick={() => setUserType("benefactor")}
					className='display-f'
					active={userType === "benefactor"}
				>
					{formType === "signup" ? <p dir='rtl'>سجل كمتبرع</p> : <p dir='rtl'> متبرع</p>}
				</Choices>
			</FormHeader>
			<FormBody onSubmit={handleSubmit} className='display-f flex-c'>
				{inputs.map((input, i) => (
					<Input key={`input${i}`} handleData={handleData} data={input} />
				))}
				<SubmitButton>
					{formType === "signup" ? (
						<p dir='rtl'>إنشاء الحساب</p>
					) : (
						<p dir='rtl'> تسجيل الدخول</p>
					)}
				</SubmitButton>
				<div style={{ padding: "15px", width: "60%", textAlign: "center" }}>
					{formType === "signup" ? (
						<p dir='rtl'>
							إذا كنت تملك حسابا سجل الدخول من{" "}
							<StyledLink to={"/login"}>هنا</StyledLink>
						</p>
					) : (
						<p dir='rtl'>
							إذا كنت لا تملك حسابا يرجى إنشاء حساب من{" "}
							<StyledLink to={"/signup"}>هنا</StyledLink>
						</p>
					)}
				</div>
			</FormBody>
		</FormContainer>
	);
}
