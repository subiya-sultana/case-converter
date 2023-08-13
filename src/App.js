import Navbar from './components/Navbar';
import MainComponent from './components/MainComponent';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {

  const [mode, setMode] = useState('light');
  // function to toggle between light and dark mode
  const toggleMode = ()=>{
    if(mode === 'dark'){
      document.documentElement.setAttribute('data-bs-theme','theme');
     document.getElementById('mylogo').src="/images/logo1.png";
      setMode('light');
    }
    else{
      document.documentElement.setAttribute('data-bs-theme','dark');
      document.getElementById('mylogo').src="/images/logo2.png";
      setMode('dark');
    }
  }
  return (
    <div className="App">
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <MainComponent/>
      <Footer/>
      </div>
  );
}

export default App;


