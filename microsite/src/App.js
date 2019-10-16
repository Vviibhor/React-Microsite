import React from 'react';
import logo from './logo.svg';
import './App.css';
import Carousel from './components/carousel/carousel-main';
import NavBar from './components/navbar/NavbarComp'
import InsightBox from './components/insight-box/insight-box';
import Carousel2 from './components/carousel/carousel';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Carousel></Carousel>
      <InsightBox></InsightBox>
      {/* <Carousel2></Carousel2> */}
      <div style={{height:"10000px"}}></div>
    </div>
  );
}

export default App;
