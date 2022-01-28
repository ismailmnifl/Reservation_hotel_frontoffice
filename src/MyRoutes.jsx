import Topbar from "./components/Topbar/Topbar";
import Home from "../src/pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Reservation from "./pages/Reservation/Reservation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* nested route components */

import Pensions from './components/pensionManagement/Pensions';
import Reservations from './components/ReservationManagement/Reservations';
import Roles from './components/roleManagement/Roles';
import User from './components/userManagement/Users';
import Accommodations from './components/accommodationManagement/Accommodations';
import AddNewUser from "./components/addNewUser/AddNewUser";

export default function MyRoutes() {
    const user = false;
  return (
    <Router>
    <Topbar />
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={user ? <Home /> : <Login />} />

      <Route path="/register" element={user ? <Home /> : <Register />} />

      <Route path="/dashboard" element={user ? <Dashboard /> : <Login />}>

            <Route path="users" element={<User />} />
            <Route path="pensions" element={<Pensions />} />
            <Route path="reservations" element={<Reservations />} />
            <Route path="roles" element={<Roles />} />
            <Route path="accommodations" element={<Accommodations />} />
            <Route path="addNewUser" element={<AddNewUser/>} />

      </Route>

      <Route path="/reservations" element={user ? <Reservation/> : <Login />} />


    </Routes>
  </Router>
  );
}
