import React from 'react'; 
import Navbar from './components/Navbar';
import MainComponent from './components/MainComponent';
import Footer from './components/Footer';
import { useState } from 'react';
import logo1 from './images/logo1.PNG';
import logo2 from './images/logo2.PNG';

function App() {

  const [mode, setMode] = useState('light');
  // function to toggle between light and dark mode
  const toggleMode = ()=>{
    if(mode === 'dark'){
      document.documentElement.setAttribute('data-bs-theme','theme');
      setMode('light');
    }
    else{
      document.documentElement.setAttribute('data-bs-theme','dark');
      setMode('dark');
    }
  }
  return (
    <div className="App">
      <Navbar mode={mode} toggleMode={toggleMode} lightLogo={logo1} darkLogo={logo2}/>
      <MainComponent/>
      <Footer/>
    </div>
  );
}

export default App;


