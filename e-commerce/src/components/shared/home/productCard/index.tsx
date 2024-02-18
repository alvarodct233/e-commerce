import products from "../../../../assets/data";
const ProductCard = () => {
  return (
    <>
      {products?.map(({ id, images, name, description, price }) => (
        <div
          key={id}
          className="flex flex-col items-center justify-center space-y-2 border rounded-lg p-4"
        >
          <img
            alt="Image"
            className="aspect-square overflow-hidden rounded-lg object-cover object-center flex"
            height="150"
            src={images}
            width="150"
          />
          <div className="space-y-1 text-center">
            <h3 className="text-sm font-bold">{name}</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {description && description.length > 30 ? description.substring(0, 30) + "..." : description}
            </p>
            <p className="text-sm font-semibold">{price}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
