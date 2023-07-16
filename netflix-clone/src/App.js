import React from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import './App.css';
import Login from './screens/Login';
import HomeScreen from './screens/HomeScreen'; 
import {
  BrowserRouter as Router,
  Route,
  Routes

} from "react-router-dom";


function App() {
  const user= null;
  const auth= getAuth();

  React.useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
      } else {
        console.log("User is not logged in");
      }
    });
    return () => {
      unsubscribeAuth();
    };
  }, []);

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
