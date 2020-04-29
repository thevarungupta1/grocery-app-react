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
import { Route, Switch, Redirect } from 'react-router-dom';
import NotFound from './components/NotFound';



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
          <Switch>
            <Route path="/category" component={CategoryList}/>
            <Route path="/products/:id" component={ProductList}/>
            <Route path="not-found" component={NotFound} />
            <Route path="/"  component={CategoryList}/>  
            <Redirect to="/not-found"/>
          </Switch>
          
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
