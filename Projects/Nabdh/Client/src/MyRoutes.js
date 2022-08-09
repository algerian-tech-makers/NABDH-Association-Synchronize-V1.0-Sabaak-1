import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import { LandingPage, Signup, Login, Onboearding, AssociationDashboard } from "./pages";
import NotFound from "./pages/NotFound";

export default function MyRoutes() {
	const { user } = useSelector((state) => state.authslice);
	return (
		<Routes>
			<Route path='' element={<LandingPage />} />
			<Route path='/signup' element={!user ? <Signup /> : <Navigate to={"/"} />} />
			<Route path='/login' element={!user ? <Login /> : <Navigate to={"/"} />} />
			<Route
				path='/onboarding'
				element={user ? <Onboearding /> : <Navigate to={"/signup"} />}
			/>
			<Route
				path='/association/:id'
				element={user ? <AssociationDashboard /> : <Navigate to={"/signup"} />}
			/>
			<Route path='*' element={<NotFound />} />
		</Routes>
	);
}
