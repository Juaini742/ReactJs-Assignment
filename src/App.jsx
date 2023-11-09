import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import BasketPage from "./pages/BasketPage";
import PurchaseLayout from "./components/template/PurchaseLayout";
function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/basket" element={<BasketPage />} />
            <Route path="/purchase" element={<PurchaseLayout />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
