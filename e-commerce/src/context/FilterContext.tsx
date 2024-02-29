import { ReactNode, createContext, useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { FilterType } from '../utils/interfaces/products';

interface IFilterContextProps {
  children?: ReactNode;
}

interface Filter {
  type: FilterType;
  param: string;
}

interface ProductContextType {
  filter: { param: string; type: string };
  setFilter: unknown;
}

// Inicializamos con un ProductContextType "vacío"
const FilterContext = createContext<ProductContextType>({
  filter: { param: '', type: FilterType.name },
  setFilter: () => {},
});

export function FilterContextProvider(props: IFilterContextProps) {
  const [filter, setFilter] = useState<Filter>({
    type: FilterType.name,
    param: '',
  });

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {props.children ? props.children : <Outlet />}
    </FilterContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useFilterContext() {
  const context = useContext(FilterContext);

  if (!context) {
    throw new Error(
      'useFilterContext must be used within a DataContextProvider'
    );
  }

  return context;
}
