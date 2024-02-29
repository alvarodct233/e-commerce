import './wishlistCard.css';

export interface IWishListCardProps {
  image: string;
  name: string;
}

export function WishListCard(props: IWishListCardProps) {
  return (
    <article className="cart-card">
      <img className='img' src={props.image} alt={`${props.name} image`} />
      <section className="product-info">
        <p className="product-name">{props.name}</p>
      </section>
    </article>
  );
}
