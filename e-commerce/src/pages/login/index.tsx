import './login.css';
import { ChangeEvent, useEffect, useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Types, ActionForm } from '../../utils/interfaces/form';
import { Input } from '../../components/common/input';
import { Button } from '../../components/common/button';
import { useAuthContext } from '../../context/AuthContext';
import { getUsers, resetForm, setErrorInput } from '../../utils';
import { User } from '../../utils/interfaces/user';
import { useAuthDispatch } from '../../context/AuthStateContext';

const initialState: Form = {
  username: '',
  password: '',
};

function reducer(state: Form, action: ActionForm): Form {
  switch (action.type) {
    case Types.ChangeEmail: {
      return {
        ...state,
        username: action.value as string,
      };
    }
    case Types.ChangePassword: {
      return {
        ...state,
        password: action.value as string,
      };
    }
    case Types.Reset: {
      return initialState;
    }
    default: {
      return state;
    }
  }
}

export function Login() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [users, setUsers] = useState([] as User[]);
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const userAuth = useAuthContext();
  const navigate = useNavigate();
  const dispatchPau = useAuthDispatch();

  useEffect(() => {
    async function setUsersAPI() {
      const response = await getUsers();
      setUsers(response);
    }

    setUsersAPI();
  }, []);

  async function validateForm(e: ChangeEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    const userFound = users.find((user) => state.username === user.username);
    const { username, password } = e.target;

    resetForm([username, password]);

    if (!userFound) {
      setErrorInput(username);
      setUsernameError('Email not registered');
    } else if (state.password !== userFound.password) {
      setErrorInput(password);
      setPasswordError('Incorrect password');
    } else {
      dispatch({ type: Types.Reset });
      localStorage.setItem('user', JSON.stringify(userFound));
      // localStorage.setItem('user', userFound.id.toString());
      userAuth.setUser(userFound);
      dispatchPau({ type: 'LOGIN' });
      navigate('/home');
    }
  }

  return (
    <section className="login">
      <section className="login-header">
        <h1>
          Skin<span>Care</span>
        </h1>
      </section>
      <section className="login-account">
        <div>
          <h2>Welcome</h2>
          <p>Enter your account here</p>
        </div>
        <form onSubmit={validateForm}>
          <Input
            name="username"
            type="text"
            text="username"
            img="/resources/mail.svg"
            value={state.username}
            handleChange={(e: ChangeEvent<HTMLInputElement>) => {
              dispatch({ type: Types.ChangeEmail, value: e.target.value });
            }}
            // handleChange={validateMail}
            error={usernameError}
          />
          <Input
            name="password"
            type="password"
            text="password"
            img="/resources/lock.svg"
            value={state.password}
            handleChange={(e: ChangeEvent<HTMLInputElement>) =>
              dispatch({ type: Types.ChangePassword, value: e.target.value })
            }
            error={passwordError}
          />
          <a href="#" title="Forgot your password">
            <span>Forgot your password?</span>
          </a>
          <Button> Log in </Button>
          <p>
          </p>
        </form>
      </section>
    </section>
  );
}
