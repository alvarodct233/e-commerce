import './productCard.css';
import { Link } from 'react-router-dom';
import { FaPlus, FaStar } from 'react-icons/fa';
import { Button } from '../../../common/button';
import { ReactNode, useState } from 'react';
import { useAuthContext } from '../../../../context/AuthContext';
import toast, { Toaster } from 'react-hot-toast';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';

export interface IProductCardProps {
  id: string;
  name: string;
  image: string;
  author: string;
  price: number;
  rating: number;
}

export function ProductCard(props: IProductCardProps): ReactNode {
  const user = useAuthContext();
  const rate = Math.floor(props.rating);
  const stars = Array.from({ length: rate }, (_e, i) => (
    <FaStar fill="#F7BC13" key={i} />
  ));
  const wished = user.user?.wishlist.find((p) => p.toString() === props.id)
    ? true
    : false;
  const [isWished, setIsWished] = useState(wished);

  function handleClickAddWish() {
    if (user.user?.wishlist && Array.isArray(user.user.wishlist)) {
      const added = user.user.wishlist.find((e) => {
        return e.toString() === props.id;
      });

    if (!added) {
      user.user?.wishlist.push(parseInt(props.id));
      toast.success(' added to the wishlist!', {
      });
      setIsWished(true);
    } else {
      const indexDelete = user.user?.wishlist.indexOf(parseInt(props.id))!;
      if (indexDelete === 0) {
        user.user?.wishlist.shift();
      } else {
        user.user?.wishlist.splice(indexDelete, indexDelete);
      }
      toast.error('This product is not on your wishlist ', {
      });
      setIsWished(false);
    }
  }
}
  function handleClickAdd() {
    if (user.user?.cart && Array.isArray(user.user.cart)) {
    const added = user.user.cart.find((e) => {
      return e.id.toString() === props.id && e.option === props.price;
    });
  
    if (!added) {
      user.user?.cart.push({
        id: parseInt(props.id),
        quantity: 1,
        option: props.price,
      });
      toast.success('Successfully added!', {
        icon: '👏',
        style: {
          fontSize: '1.5rem',
        },
      });
    } else {
      toast.success('Successfully added!', {
        icon: '👏',
        style: {
          fontSize: '1.5rem',
        },
      });
      added.quantity = added.quantity + 1;
    }
  }
} 


  return (
    <article className="card">
      <section className="card-icons">
        {isWished && <IoHeart onClick={handleClickAddWish} fill="#E74800" />}
        {!isWished && (
          <IoHeartOutline onClick={handleClickAddWish} stroke="#E74800" />
        )}

        <FaPlus className="pointer" onClick={handleClickAdd} />
      </section>
      <Link to={`/${props.id}`}>
        <Toaster />
        <section className="card-header">
          <img
            className="card-img"
            src={props.image}
            alt={`${props.name} image`}
          />
        </section>
        <section className="card-info">
          <h3>{props.name}</h3>
          <p>{props.author}</p>
          <p>
            {props.price}
            <span className="card-euro"> €</span>
          </p>
          <section className="card-rating">
            {stars.map((s) => s)}
            <span>({props.rating})</span>
          </section>
        </section>
        <Button size={'1rem'}>More info</Button>
      </Link>
    </article>
  );
}
