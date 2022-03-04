import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import MapboxScreen from "./screens/MapboxScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} exact />
            <Route path='/product/:id' element={<ProductScreen />} />

            <Route path='/cart'>
              <Route path=':id' element={<CartScreen />} />
              <Route path='' element={<CartScreen />} />
            </Route>

            <Route path='/mapbox' element={<MapboxScreen/>}/>
            
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;