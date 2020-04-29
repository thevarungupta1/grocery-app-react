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
import LifeCycleDemo from './components/Lifecycle/LifeCycleDemo';


function App() {
  return (
    <div>
      <LifeCycleDemo />
  
    </div>
  );
}

export default App;
