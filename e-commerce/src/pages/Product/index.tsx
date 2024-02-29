import { ReactNode } from 'react';
import { Header } from '../../components/layout/Header';
import { NavBar } from '../../components/layout/NavBar';
import { ProductsSection } from '../../components/layout/ProductsSection';

export function Product(): ReactNode {
  return (
    <>
      <Header search />
      <h2>Skin Care Products</h2>
      <ProductsSection />
      <NavBar />
    </>
  );
}
