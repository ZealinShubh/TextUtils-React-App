import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');  //wether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1400);
  }
  
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#061b3a';
      showAlert("Dark Mode has been Enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled", "success");
    }
  }

  return (
    <>
    <Router>
    <Navbar title={"TextUtils"} about="About Us" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <Routes>
        {/* /user===>Component 1
        /user/home===>Component 1 */}
        <Route exact path='/about' element={<About mode={mode}/>} />
        <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Enter Your Text to Analyze" mode={mode}/>} />
      </Routes>
      {/* <TextForm showAlert={showAlert} heading="Enter Your Text to Analyze" mode={mode}/> */}
    </div>
    {/* <TextForm showAlert={showAlert} heading="Enter Your Text to Analyze" mode={mode}/> */}
    </Router>
    </>
  );
}

export default App;
