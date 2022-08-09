import { useState } from "react";
import { Form } from "../components/Signup-Login";
import { Container } from "../styles/Login-Signup";
import { loginInputs } from "../assets/inputs";
import { useLoginMutation } from "../features/ApiSlice/api-query";
import { setFormData } from "../helpers/formData";
import { setLocalUser } from "../features/auth/slice";
import { useDispatch } from "react-redux";

export default function Login() {
	const [userType, setUserType] = useState("Associations");
	const [inputData, setInputData] = useState({});
	const [login] = useLoginMutation();
	const dispatch = useDispatch();

	function handleData(e) {
		setInputData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
	}

	async function handleSubmit(e) {
		e.preventDefault();
		let formData = setFormData({ ...inputData, type: userType });
		try {
			let data = await login(formData);
			dispatch(setLocalUser(data.data));
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<Container className='display-f'>
			<Form
				formType={"login"}
				userType={userType}
				setUserType={setUserType}
				inputs={loginInputs}
				handleData={handleData}
				handleSubmit={handleSubmit}
			/>
		</Container>
	);
}
