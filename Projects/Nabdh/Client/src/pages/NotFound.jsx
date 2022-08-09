import React from "react";

export default function NotFound() {
	return (
		<div
			style={{
				position: "relative",
				top: "200px",
				margin: "0 auto",
				textAlign: "center",
				fontSize: "30px",
			}}
		>
			<i className='fa-solid fa-face-sad-tear'></i>
			Nothing Found
		</div>
	);
}
export function NoUserFound() {
	return (
		<div
			style={{
				position: "relative",
				top: "200px",
				margin: "0 auto",
				textAlign: "center",
				fontSize: "30px",
			}}
		>
			<i className='fa-solid fa-user-large-slash'></i> No User Found
		</div>
	);
}
