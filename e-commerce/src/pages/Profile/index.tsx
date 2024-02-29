import './profile.css';
import { useNavigate } from 'react-router-dom';
import { NavBar } from '../../components/layout/NavBar';
import { Header } from '../../components/layout/Header';
import { Button } from '../../components/common/button';
import { useAuthContext } from '../../context/AuthContext';

export interface IProfileProps {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function Profile() {
  const navigate = useNavigate();
  const user = useAuthContext();

  function handleClick() {
    localStorage.removeItem('user');
    navigate('/');
  }

  return (
    <>
      <Header />
      <section className="profile">
        <span>
          <p>Name:</p> {user.user?.name}
        </span>
        <span>
          <p>Username:</p> {user.user?.username}
        </span>
        <span>
          <p>Email:</p> {user.user?.email}
        </span>
        <Button handle={handleClick}>Log out</Button>
      </section>
      <NavBar />
    </>
  );
}
