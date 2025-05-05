import { BrowserRouter, Routes, Route } from "react-router";
import Product from "../src/pages/Product";
import Login from '../src/pages/Login';
import Register from '../src/pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/products" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;