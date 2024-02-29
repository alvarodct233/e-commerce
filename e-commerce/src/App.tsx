import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router';
import { AuthContextProvider } from './context/AuthContext';
import { AuthProvider } from './context/AuthStateContext';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <AuthProvider>
          <AppRouter />
        </AuthProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
