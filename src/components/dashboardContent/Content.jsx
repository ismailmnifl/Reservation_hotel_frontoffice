import Pensions from '../pensionManagement/Pensions';
import Reservations from '../ReservationManagement/Reservations';
import Roles from '../roleManagement/Roles';
import User from '../userManagement/Users';
import Accommodations from '../accommodationManagement/Accommodations';

import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";

import './content.css';
;




export default function Content() {
  return (
    <div className="content">

       {/* <Router>
        <Routes>
          <Route path="/dashboard/users" element={<User/>}/>
          <Route path="/dashboard/pensions" element={<Pensions />}/>
          <Route path="/dashboard/reservations" element={<Reservations />}/>
          <Route path="/dashboard/roles" element={<Roles />}/>
          <Route path="/dashboard/accommodations" element={<Accommodations />}/>
        </Routes>
      </Router>  */}
      <Outlet/>
    </div>
  );
}
