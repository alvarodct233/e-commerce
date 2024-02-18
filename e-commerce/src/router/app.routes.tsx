import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { HomePage, CartPage } from "../pages";

export const AppRoutes = () => {
	return (
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<Navigate to="/" />} />
				</Routes>
			</BrowserRouter>
	);
};