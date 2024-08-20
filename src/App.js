import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import DescriptionPage from './Pages/DescriptionPage';
import Home from './Pages/Home';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Order from './Pages/Order';
import Checkout from './Pages/Checkout';
import Seller from './Pages/SellerJourney/Seller';
import Submit from './Pages/SellerJourney/Submit';
import AdminHome from './Pages/AdminMod/AdminHome';
import ApprovalList from './Pages/AdminMod/AdminList';
import CashApproval from './Pages/AdminMod/CashApproval';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/Product-Description" element={<DescriptionPage />} />
          <Route path="/Admin" element={<AdminHome />} />
          <Route path="/ApprovalList" element={<ApprovalList />} />
          <Route path="/Order" element={<Order />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/Submit" element={<Submit />} />
          <Route path="/CashApproval" element={<CashApproval />} />
          <Route path="/Seller" element={<Seller />} />
          <Route path="/" element={<Home />}>
          </Route>
        </Routes>
        {(window.location.pathname !== "/Admin" &&
          window.location.pathname !== "/ApprovalList" &&
          window.location.pathname !== "/CashApproval") &&
          <Footer />
        }
      </BrowserRouter>
    </div>
  );
}

export default App;
