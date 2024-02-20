import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { HomePage, CartPage, LoginPage } from "../pages";

export const AppRoutes = () => {
	return (
			<BrowserRouter>
				<Routes>
					<Route path="/login" element={<LoginPage />} />
					<Route path="/" element={<HomePage />} />
					<Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<Navigate to="/login" />} />
				</Routes>
			</BrowserRouter>
	);
};