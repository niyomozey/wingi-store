import React from 'react';
import ProductForm from './components/Product/ProductForm';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from './components/Product/ProductList';
import Login from './components/Auth/Login';

function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path='/' element={<ProductList/>}/>
          <Route path='/pform' element={<ProductForm/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
