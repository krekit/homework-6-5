import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import CategoryPage from "./pages/categoryPage/CategoryPage";
import DetailPage from "./pages/detailPage/DetailPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from "react";
import categoryStore from "./store/category";
import './style.scss'

const App = () => {
  const getCategories = categoryStore(store => store.getCategories)

  useEffect(()=>{
    getCategories()
  }, [])

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/category/:category" element={<CategoryPage />}/>
        <Route path="/product/:id" element={<DetailPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


