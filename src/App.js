// import logo from './logo.svg';
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route 
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); //Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      // document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing Mode";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now";
      // }, 1500);
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      // document.title = "TextUtils - Light Mode";
    }
  }
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" />   */}
    <Router>
      <Navbar title="TextUtils" mode={mode}  toggleMode={toggleMode} />  
      {/* <Navbar /> */}
      {/* props */}
      <Alert alert={alert} />
      <div className="container my-3">
      <Routes>
        {/* /users --> Component 1
            /users/home --> Component 2 */}
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route exact path="/" element={<Textform heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces, etc." mode={mode} showAlert={showAlert} />} />
          {/* <Textform heading="Enter the text to analyze" mode={mode} showAlert={showAlert} /> */}
        </Routes>
      </div>
    </Router>
        {/* <About /> */}
    </>
  );
}

export default App;
