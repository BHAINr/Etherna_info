
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "./user_components/Home";
import UserRegester from './user_components/UserRegester';
import Login from './user_components/Login';
import Logout_user from './user_components/Logout_user';
import UpdateProfile from './user_components/UpdateProfile';
import GetUserDetails from './user_components/GetUserDetails';


function App() {
  return (

    <Router>
      <Logout_user exact  path="/" />
      
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<UserRegester />} />
        <Route exact path="/profile/update" element={<UpdateProfile />} />
        <Route  path="/profile" element={<GetUserDetails/>} />
      </Routes>
    </Router>
  );
}

export default App;
