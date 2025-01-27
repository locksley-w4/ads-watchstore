import "./App.css";
import { productContextValue, ProductsContext } from "./context/context";
import AppRouterProvider from "./router/router";
import AuthContextProvider from "./context/AuthContextProvider";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <UserContextProvider>
          <ProductsContext.Provider value={productContextValue}>
            <AppRouterProvider />
          </ProductsContext.Provider>
        </UserContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
