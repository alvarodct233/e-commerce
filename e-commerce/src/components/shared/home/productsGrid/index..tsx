import { FC, PropsWithChildren } from "react";

const ProductsGrid: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="container px-4 mt-5 md:px-6">
      <div className="grid items-start gap-6">
        <div className="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ProductsGrid;
