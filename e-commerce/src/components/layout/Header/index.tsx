import './header.css';
import { useAuthContext } from '../../../context/AuthContext';
import { FaSearch } from 'react-icons/fa';
import { ChangeEvent, ReactElement } from 'react';
import { useFilterContext } from '../../../context/FilterContext';
import { FilterType } from '../../../utils/interfaces/products';
import { Link } from 'react-router-dom';

interface IHeaderProps {
  search?: boolean;
}

export function Header(props: IHeaderProps): ReactElement {
  const userAuth = useAuthContext();
  const filter = useFilterContext();
  const inputValue =
    filter.filter.type === FilterType.name ? filter.filter.param : '';
  const searchBarClass = props.search ? '' : 'hide';

  function handleFilter(e: ChangeEvent<HTMLInputElement>) {
    filter.setFilter({ type: FilterType.name, param: e.target.value });
  }

  return (
    <section className="home-header">
      <Link to="/profile" className="home-header-user">
        <h2>{userAuth.user?.name}</h2>
      </Link>
      <section className={searchBarClass}>
        <div className="header-search-group">
          <span className="header-search-icon">
            <FaSearch />
          </span>
          <input
            onChange={handleFilter}
            value={inputValue}
            className="header-search-input"
            type="search"
            placeholder="Search"
          />
        </div>
      </section>
    </section>
  );
}
