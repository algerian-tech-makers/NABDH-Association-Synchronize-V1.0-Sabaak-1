import { useState } from "react";
import { signupInputs } from "../assets/inputs";
import { Form } from "../components/Signup-Login";
import { Container } from "../styles/Login-Signup";
import { useSignupMutation } from "../features/ApiSlice/api-query";
import { setFormData } from "../helpers/formData";

export default function Signup() {
	const [userType, setUserType] = useState("Associations");
	const [inputData, setInputData] = useState({});
	const [signup] = useSignupMutation();

	function handleData(e) {
		setInputData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
	}

	async function handleSubmit(e) {
		e.preventDefault();
		let formData = setFormData({ ...inputData, type: userType });
		try {
			let data = await signup(formData);
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<Container className='display-f'>
			<Form
				formType={"signup"}
				userType={userType}
				setUserType={setUserType}
				inputs={signupInputs}
				handleData={handleData}
				handleSubmit={handleSubmit}
			/>
		</Container>
	);
}
