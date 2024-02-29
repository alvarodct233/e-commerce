import { ReactNode, createContext, useContext, useReducer } from 'react';

interface AuthState {
  isAuthenticated: boolean;
}

type Action =
  | {
      type: 'LOGIN';
    }
  | {
      type: 'LOGOUT';
    }
  | { type: 'START-UP' };

type Dispatch = (action: Action) => void;

const AuthStateContext = createContext<AuthState>({ isAuthenticated: false });
const AuthDispatchContext = createContext<Dispatch | undefined>(undefined);

function reducer(state: AuthState, action: Action) {
  switch (action.type) {
    case 'LOGIN':
      return { isAuthenticated: true };

    case 'LOGOUT':
      return { isAuthenticated: false };

    case 'START-UP':
      // eslint-disable-next-line no-case-declarations
      const user = localStorage.getItem('user');
      if (!user) {
        return { isAuthenticated: false };
      }
      //check if is in localStorage
      //añadir un useEffect dispatch start-up en protected route para comprobar si hay un usuario
      return { isAuthenticated: true };

    default:
      return state;
  }
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, { isAuthenticated: false });
  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export function useAuthState() {
  const context = useContext(AuthStateContext);

  if (!context) {
    throw new Error('useAuthState must be used within an AuthProvider');
  }

  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuthDispatch() {
  const context = useContext(AuthDispatchContext);

  if (!context) {
    throw new Error('useAuthDispatch must be used within an AuthProvider');
  }

  return context;
}
