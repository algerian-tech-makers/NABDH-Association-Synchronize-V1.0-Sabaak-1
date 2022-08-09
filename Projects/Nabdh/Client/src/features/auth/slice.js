import { createSlice } from "@reduxjs/toolkit";
let user = JSON.parse(localStorage.getItem("user"));
const state = { user };

let slice = createSlice({
	name: "slice",
	initialState: state,
	reducers: {
		setLocalUser: (state, action) => {
			localStorage.setItem("user", JSON.stringify(action.payload));
			state.user = action.payload;
		},
	},
});
export default slice.reducer;
export const { setLocalUser } = slice.actions;
