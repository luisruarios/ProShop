import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import MapboxScreen from "./screens/MapboxScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/shipping' element={<ShippingScreen/>}/>
            <Route path='/order/:id' element={<OrderScreen/>}/>
            <Route path='/placeorder' element={<PlaceOrderScreen/>}/>
            <Route path='/payment' element={<PaymentScreen/>}/>
            <Route path='/login' element={<LoginScreen/>} />
            <Route path='/' element={<HomeScreen />}exact/>
            <Route path='/product/:id' element={<ProductScreen/>}/>
            <Route path='/cart' element={<CartScreen/>}/>
            <Route path='/profile' element={<ProfileScreen/>}/>
            <Route path='/register' element={<RegisterScreen/>}/>
            <Route path='/mapbox' element={<MapboxScreen/>}/>

          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;