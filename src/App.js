import * as React from 'react';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';

import AboutView from './views/aboutView';
import AccountView from './views/accountView';
import AccountCreateView from './views/account/accountCreateView';
import AccountProfileView from './views/account/accountProfileView';
import AccountUpdateView from './views/account/accountUpdateView';
import CartView from './views/cartView';
import CartCheckoutView from './views/cart/cartCheckoutView';
import CartListView from './views/cart/cartListView';
import CartPaymentView from './views/cart/cartPaymentView';
import ContactView from './views/contactView';
import DashboardView from './views/dashboardView';
import OrderView from './views/orderView';
import OrderDetailsView from './views/order/orderDetailsView';
import OrderListView from './views/order/orderListView';
import PasswordUpdateView from './views/passwordUpdateView';
import ProductView from './views/productView';
import ProductDetailsView from './views/product/productDetailsView';
import ProductListView from './views/product/productListView';
import RestorePasswordView from './views/restorePasswordView';
import ServiceView from './views/serviceView';
import ServiceDetailsView from './views/service/serviceDetailsView';
import ServiceListView from './views/service/serviceListView';
import SignInView from './views/signInView';
import SignUpView from './views/signUpView';
import WelcomeView from './views/welcomeView';

import './App.css';


function App() {
  return (
    <Router>
        <Routes>
            <Route exact path="/" element={<WelcomeView/>}/>
            <Route exact path="/about" element={<AboutView/>}/>
            <Route exact path="/account" element={<AccountView/>}/>
            <Route exact path="/account/create" element={<AccountCreateView/>}/>
            <Route exact path="/account/profile" element={<AccountProfileView/>}/>
            <Route exact path="/account/update" element={<AccountUpdateView/>}/>
            <Route exact path="/cart" element={<CartView/>}/>
            <Route exact path="/cart/checkout" element={<CartCheckoutView/>}/>
            <Route exact path="/cart/list" element={<CartListView/>}/>
            <Route exact path="/cart/payment" element={<CartPaymentView/>}/>
            <Route exact path="/contact" element={<ContactView/>}/>
            <Route exact path="/dashboard" element={<DashboardView/>}/>
            <Route exact path="/order" element={<OrderView/>}/>
            <Route exact path="/order/details/*">
              <Route path=":id" element={<OrderDetailsView/>}/>
            </Route> 
            <Route exact path="/order/list" element={<OrderListView/>}/>
            <Route exact path="/product" element={<ProductView/>}/>
            <Route exact path="/product/details/*">
              <Route path=":id" element={<ProductDetailsView/>}/>
            </Route>
            <Route exact path="/product/list" element={<ProductListView/>}/>
            <Route exact path="/restore-password" element={<RestorePasswordView/>}/>
            <Route exact path="/service" element={<ServiceView/>}/>
            <Route exact path="/service/details/*">
              <Route path=":id" element={<ServiceDetailsView/>}/>
            </Route>
            <Route exact path="/service/list" element={<ServiceListView/>}/>
            <Route exact path="/update-password" element={<PasswordUpdateView/>}/>
            <Route exact path="/signin" element={<SignInView/>}/>
            <Route exact path="/signup" element={<SignUpView/>}/>
        </Routes>
    </Router>
  );
}

export default App;
