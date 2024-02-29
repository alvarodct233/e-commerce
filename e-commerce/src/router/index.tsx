import { Routes, Route, Navigate } from 'react-router-dom';
import { ProtectedRoute } from '../components/layout/ProtectedRoute';
import { Cart, Home, Login, Product, ProductDetail } from '../pages';
import { ProductContextProvider } from '../context/ProductContext';
import { FilterContextProvider } from '../context/FilterContext';
import { Profile } from '../pages/Profile';
import { Checkout } from '../pages/checkout';
import { WishList } from '../pages/WishList';

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route element={<ProductContextProvider />}>
          <Route element={<FilterContextProvider />}>
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Product />} />
            <Route path="/:item" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/checkout" element={<Checkout />} />
          </Route>
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
