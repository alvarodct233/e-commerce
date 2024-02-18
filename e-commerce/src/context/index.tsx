import { FC, PropsWithChildren, createContext, useContext } from "react";

// Primer paso es crear nuestro contexto. Luego le asignamos un valor
export const userNameContext = createContext<{ userName: string }>({ userName: "" });

// Segundo paso es crear un provider para nuestro contexto. Luego le asignamos un valor
export const UserNameProvider:FC<PropsWithChildren> = ({ children }) => {

  const userName = "Tomas Fernandez";

  return (
    <userNameContext.Provider value={{ userName }}>
      {children}
    </userNameContext.Provider>
  );
}

// I am creating a custom hook to use the context. This is a good practice to avoid using useContext
// in every component. This way we can use a custom hook to get the value we need without having to
// import useContext and the context in every component we use it later on.
export function useUserName() {
  const context = useContext(userNameContext);

  if (!context) {
    throw new Error("useUserName must be used within a UserNameProvider");
  }

  return context;
}

