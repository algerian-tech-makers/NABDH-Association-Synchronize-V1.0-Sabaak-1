import { useRef, useState } from "react";
import { InputContainer } from "../../styles/Login-Signup";

export default function Input({ handleData, data }) {
	const input = useRef(null);
	const [inputActive, setIninputActive] = useState(false);

	//T
	if (data.type === "select")
		return (
			<InputContainer inputActive={true} className='display-f flex-c'>
				<label htmlFor={data.id}>{data.label}</label>
				<select
					ref={input}
					type={data.type}
					name={data.name}
					id={data.id}
					required={data.required}
					onChange={handleData}
					onFocus={() => setIninputActive(true)}
					onBlur={() => (input.current.value ? null : setIninputActive(false))}
				>
					<option value=''>--Please choose an option--</option>
					{data.options.map((option, i) => (
						<option key={`option${i}`} value={option}>
							{option}
						</option>
					))}
				</select>
			</InputContainer>
		);

	return (
		<InputContainer inputActive={inputActive} className='display-f flex-c'>
			<label htmlFor={data.id}>{data.label}</label>
			<input
				ref={input}
				type={data.type}
				name={data.name}
				id={data.id}
				required={data.required}
				onChange={handleData}
				onFocus={() => setIninputActive(true)}
				onBlur={() => (input.current.value ? null : setIninputActive(false))}
			/>
		</InputContainer>
	);
}
