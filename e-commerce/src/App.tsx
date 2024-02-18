import "./App.css";
import { UserNameProvider } from "./context";
import { AppRoutes } from "./router/app.routes";

function App() {
  return (
    <>
      <UserNameProvider>
        <AppRoutes />
      </UserNameProvider>
    </>
  )
}

export default App;
