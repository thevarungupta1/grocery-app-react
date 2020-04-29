import React from 'react';
import logo from './logo.svg';
import './App.css';

// components
import Navbar from './components/shared/Navbar';
import Header from './components/shared/Header';
import Sidebar from './components/shared/Sidebar';
import CategoryList from './components/CategoryList';
import Footer from './components/shared/Footer';
import ProductList from './components/ProductList';



function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="row">
        <div className="col-lg-3">
          <Sidebar />
        </div>
        <div className="col-lg-9">
          <CategoryList />
          <ProductList />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
