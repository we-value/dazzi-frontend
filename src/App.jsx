import { Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import SellerNew from "./pages/SellerNew";
import ProductNew from "./pages/ProductNew";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/sellerNew" element={<SellerNew />} />
        <Route path="/productNew" element={<ProductNew />} />
      </Routes>
    </>
  );
};

export default App;
