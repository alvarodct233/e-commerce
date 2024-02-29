import './home.css';
import { Link } from 'react-router-dom';
import { Header } from '../../components/layout/Header';
import { NavBar } from '../../components/layout/NavBar';
import { ProductsSection } from '../../components/layout/ProductsSection';

export function Home() {
  return (
    <>
      <Header search />
      <section className="popular-header">
        <h3>Most popular</h3>
        <Link to="/products">
          <span>See all</span>
        </Link>
      </section>
      <ProductsSection max={5} />
      <NavBar />
    </>
  );
}
