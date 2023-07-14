import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import './styles/index.css';
import HomePage from './pages/home';
import CalculatorPage from './pages/calculator';
import QuotePage from './pages/quote';
import NavBar from './components/navBar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="calculator/" element={<CalculatorPage />} />
        <Route path="quotes/" element={<QuotePage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
