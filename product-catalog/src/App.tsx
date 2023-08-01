import React from 'react';
import { SearchScreen, ProductsScreen } from './screens';
import { SearchBar } from './components';
import { Routes, Route, Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SearchBar />} />
        <Route path="products" element={<ProductsScreen />} />
      </Routes>
    </div>
  );
}

export default App;
