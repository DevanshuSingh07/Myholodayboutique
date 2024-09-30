import Home from './pages/Home';
import './index.css';
import React from 'react';
import {
 BrowserRouter,
 Route,
 Routes
} from "react-router-dom";
import AboutUs from './pages/AboutUs';
import Form from './components/Form'
import TravelPackagesPage from './pages/TravelPackagesPage';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import IndianPackagesPage from './pages/IndianPackagesPage';
import BlogPost from './components/BlogPost';
import BlogPage from './pages/BlogPage';

function App() {
  return (
    <div className="App">
     
          <BrowserRouter>
          <Navbar/>
          <Routes>
            

          <Route path='/' element={<Home/>}/>
          <Route path='/aboutus' element={<AboutUs/>}/>
          <Route path='/indian' element={<IndianPackagesPage/>}/>
          <Route path='/international/' element={<TravelPackagesPage/>}/>
          <Route path='/blog' element={<BlogPage/>}/>
          <Route path='/aloneblog/:id' element={<BlogPost/>}/>
          
          
          </Routes>

          </BrowserRouter>
          <Footer/>
        </div>
  );
}

export default App;
