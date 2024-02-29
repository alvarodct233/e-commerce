import './productsSection.css';
import { ReactNode, useEffect } from 'react';
import { ProductCard } from './ProductCard';
import { useProductContext } from '../../../context/ProductContext';
import { useFilterContext } from '../../../context/FilterContext';
import { FilterType } from '../../../utils/interfaces/products';
import { getProducts } from '../../../utils';
import { IoSadOutline } from 'react-icons/io5';

export interface IProductsSectionProps {
  max?: number;
}

export function ProductsSection(props: IProductsSectionProps): ReactNode {
  const products = useProductContext();
  const filter = useFilterContext();
  const max = props.max ? props.max : products.products.length;
  const showProducts = products.products.slice(0, max);
  const productsFiltered = showProducts.filter((product) => {
    if (!filter.filter.param) {
      return true;
    } else {
      if (filter.filter.type === FilterType.name) {
        const name = product.name.toLowerCase();
        return name.includes(filter.filter.param.toLowerCase());
      } else {
        const genre = product.genre;
        return genre.includes(filter.filter.param);
      }
    }
  });

  useEffect(() => {
    async function getProductAPI() {
      const response = await getProducts();
      products.setProducts(response);
    }

    getProductAPI();
  },);

  return (
    <section className="popular-items">
      {productsFiltered.length === 0 && (
        <section className="no-products">
          <IoSadOutline className="cart-icon" />
        </section>
      )}
      {productsFiltered.map(({ id, image, name, rate, options }) => {
        return (
          <ProductCard
            key={id}
            id={id}
            image={image}
            name={name}
            price={options[0].price}
            rating={rate} author={''}         
          />
        );
      })}
    </section>
  );
}
