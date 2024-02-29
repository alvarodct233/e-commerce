import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useContext,
    useState,
  } from 'react';
  import { Outlet } from 'react-router-dom';
  import { Product } from '../utils/interfaces/products';
  
  interface IProductContextProps {
    children?: ReactNode;
  }
  
  interface ProductContextType {
    products: Product[];
    setProducts: Dispatch<SetStateAction<Product[]>>;
  }
  
  const ProductContext = createContext({} as ProductContextType);
  
  export function ProductContextProvider(props: IProductContextProps) {
    const [products, setProducts] = useState<Product[]>([] as Product[]);
  
    return (
      <ProductContext.Provider value={{ products, setProducts }}>
        {props.children ? props.children : <Outlet />}
      </ProductContext.Provider>
    );
  }
  
  // eslint-disable-next-line react-refresh/only-export-components
  export function useProductContext() {
    const context = useContext(ProductContext);
  
    if (!context) {
      throw new Error(
        'useProductContext must be used within a DataContextProvider'
      );
    }
  
    return context;
  }
  