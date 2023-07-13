import React from 'react';
import './App.css';
import Login from './screens/Login';
import HomeScreen from './screens/HomeScreen'; 
import {
  BrowserRouter as Router,
  Route,
  Routes

} from "react-router-dom";


const user= null;
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
        {!user? (
        <Route path="/Login" element={<Login/>} />) :
        <Route path="/" element={<HomeScreen/>} />

        }

        </Routes>
      </Router>
    </div>
  );
}

export default App;
