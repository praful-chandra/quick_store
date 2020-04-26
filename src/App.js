import React from 'react';
import './App.scss';

import Navbar from "./components/navbar/navbar_component";
import HomeItems from "./components/HomeItems/homeItems_component";

function App() {  
  return (
    <div className="App">
        <Navbar/>
        <HomeItems/>
    </div>
  );
}

export default App;
