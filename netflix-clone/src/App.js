import React, { useEffect } from "react";
import { getAuth, onIdTokenChanged } from "firebase/auth";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Login from "./screens/Login";
import HomeScreen from "./screens/HomeScreen";
import Profile from "./screens/Profile";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { login, logout, selectUser } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);
  const auth = getAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onIdTokenChanged(auth, (user) => {
      if (user) {
        console.log(user);
        dispatch(
          login({
            uid: user.uid,
            email: user.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch, auth]);

  return (
    <div className="app">
      {!user ? (
          <Login/>
      ):(

      <Router>
        <Routes>

              <Route exact path="/" element={<HomeScreen />} />
              <Route path="/profile" element={<Profile />} />
  
        
        </Routes>
      </Router>
      
      )};
    </div>
  );
}

export default App;