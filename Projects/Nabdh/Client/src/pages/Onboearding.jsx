import { useState, useEffect } from "react";
import { Form } from "../components/Onboarding";
import { Container } from "../styles/Login-Signup";
import { AssociationOnboardingInputs } from "../assets/inputs";
import { setFormData } from "../helpers/formData";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useUpdateAssociationMutation } from "../features/ApiSlice/api-query";
import { setLocalUser } from "../features/auth/slice";

export default function Onboarding() {
	const [inputData, setInputData] = useState({});
	const [update, result] = useUpdateAssociationMutation();
	const { user } = useSelector((state) => state.authslice);
	const navigate = useNavigate();

	useEffect(() => {
		if (user.completedOnBoarding) navigate(`/association/${user.id}`);
		console.log("result");
		console.log(result);
	}, [user, navigate, result]);

	function handleData(e) {
		setInputData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
	}

	async function handleSubmit(e) {
		e.preventDefault();
		let formData = setFormData({ ...inputData, id: user.id, type: "" });
		try {
			let data = await update(formData);
			setLocalUser(data.data);
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<Container className='display-f'>
			<Form
				formType={"onboarding"}
				inputs={AssociationOnboardingInputs}
				handleData={handleData}
				handleSubmit={handleSubmit}
			/>
		</Container>
	);
}
