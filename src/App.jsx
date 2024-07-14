import { Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import SellerNew from "./pages/SellerNew";
import SellerEdit from "./pages/SellerEdit";
import ProductNew from "./pages/ProductNew";
import ProductEdit from "./pages/ProductEdit";
import KakaoCallback from "./pages/KakaoCallback.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/sellerNew" element={<SellerNew />} />
        <Route path="/sellerEdit/:id" element={<SellerEdit />} />
        <Route path="/productNew" element={<ProductNew />} />
        <Route path="/productEdit/:id" element={<ProductEdit />} />
        <Route path="/login/oauth2/code/kakao" element={<KakaoCallback />} />
      </Routes>
    </>
  );
};

export default App;
