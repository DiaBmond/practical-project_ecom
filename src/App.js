import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import ProductDetailPage from './Pages/ProductDetail';
import ProductListingPage from './Pages/ProductListing';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import SellProductPage from './Pages/SellProduct';
import Profile from './Pages/Profile';
import SellProductDetailPage from './Pages/SellProductDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/sellproduct" element={<SellProductPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sellproduct/:id" element={<SellProductDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
