import './productDetail.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useProductContext } from '../../context/ProductContext';
import { NavBar } from '../../components/layout/NavBar';
import { CartModal } from '../../components/layout/CartModal';
import { Product } from '../../utils/interfaces/products';
import { FaStar } from 'react-icons/fa';
import { BsArrowLeftCircle, BsCheck2Circle } from 'react-icons/bs';
import { ChangeEvent, useMemo, useState } from 'react';

export function ProductDetail() {
  const products = useProductContext();
  const navigate = useNavigate();
  const { item } = useParams();
  const showProduct = products.products.find((p) => p.id === item) as Product;
  const [price, setPrice] = useState(showProduct.options[0].price);
  const userOptions = useMemo(() => ({ price, quantity: 1 }), [price]);
  const rate = Math.floor(showProduct!.rate);
  const stars = Array.from({ length: rate }, (_e, i) => (
    <FaStar fill="#F7BC13" key={i} />
  ));

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setPrice(
      parseFloat(e.target.nextSibling?.lastChild?.textContent as string)
    );
  }

  function handleClick() {
    navigate(-1);
  }

  return (
    <>
      <section className="products-detail-section">
        <BsArrowLeftCircle onClick={handleClick} className="back pointer" />
        <h2 className='product_name'>{showProduct.name}</h2>
        <img
          className="products-img"
          src={showProduct.image}
          alt={`${showProduct.name} image`}
        />
        <span className="products-rating">
          {stars.map((s) => s)} <span> ({showProduct.rate})</span>
        </span>
        <p className="products-price">{price} €</p>
        <section className="btn-section">
          {showProduct.options.map((option, i) => {
            const checked = i === 0 ? true : false;
            return (
              <label className="label-btn" key={option.cover}>
                <input
                  defaultChecked={checked}
                  onChange={handleChange}
                  className="radio-btn"
                  name="option-btn"
                  type="radio"
                />
                <section className="option-btn">
                  <BsCheck2Circle className="check-btn" />
                  <p>{option.cover}</p>
                  <p>{option.price} €</p>
                </section>
              </label>
            );
          })}
        </section>

        <h2>Description</h2>
        <p className="products-synopsis">{showProduct.synopsis}</p>
      </section>
      <CartModal userOptions={userOptions} idProduct={showProduct.id} />
      <NavBar />
    </>
  );
}
