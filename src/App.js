import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Booking from './Components/Dashbord/ClientDashboard/Booking/Booking';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Login from './Components/Login/Login';
import Rwview from './Components/Dashbord/ClientDashboard/Review/Rwview';
import AddService from './Components/Dashbord/AdminDashboard/AddService/AddService';
import ManageService from './Components/Dashbord/AdminDashboard/ManageService/ManageService';
import Admin from './Components/Dashbord/AdminDashboard/Admin/Admin';
import Client from './Components/Dashbord/ClientDashboard/Client/Client';

import BookingList from './Components/Dashbord/BookingKist/BookingList';
import AddAdmin from './Components/Dashbord/AdminDashboard/AddAdmin/AddAdmin';
import Dashboard from './Components/Dashbord/Dashboard/Dashboard';
import { Nav } from 'react-bootstrap';
import Navbar from './Components/Home/Navbar/Navbar';


export const UserContext=createContext()

function App() {
  const [loggedInUser, setLoggedInUser]=useState({})
  return (
    <div className="App">
    <UserContext.Provider value={[loggedInUser,setLoggedInUser] }>

      <Router>
        <Navbar></Navbar>
        <div>
          <Switch>
          <PrivateRoute path="/booking/:_id">
             <Booking></Booking>
              
            </PrivateRoute>
            <PrivateRoute path="/bookingList">
            <BookingList></BookingList>
              
            </PrivateRoute>
            <PrivateRoute path="/review">
             <Rwview></Rwview>
              
            </PrivateRoute>
            <PrivateRoute path="/addservice">
            <AddService></AddService>
            </PrivateRoute>
            
            <PrivateRoute path="/addAdmin">
              <AddAdmin></AddAdmin>
            </PrivateRoute>

            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>

            <PrivateRoute path="/manageService">
           <ManageService></ManageService>
            </PrivateRoute>
            <PrivateRoute path="/admin">
           <Admin></Admin>
            </PrivateRoute>
            <PrivateRoute path="/client">
           <Client></Client>
            </PrivateRoute>
            
         

            <Route path="/login">
              <Login></Login>
            </Route>

            
            
            <Route path="/">
              <Home></Home>
            </Route>
           
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
    </div>
  );
}

export default App;
