import logo from './logo.svg';
import './App.css';
import Routers from './Components/Routes/Routers';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header/Header';

function App() {
  const token = localStorage.getItem("token")
    const [rightButtonText, setRightButtonText] = useState(token ? "Logout" : "Login")
    
  return (
    <BrowserRouter>
    <Header rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>
      <Routers rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>
    </BrowserRouter>
  );
}

export default App;
