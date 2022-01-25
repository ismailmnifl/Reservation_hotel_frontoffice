import Pensions from '../pensionManagement/Pensions';
import Reservations from '../ReservationManagement/Reservations';
import Roles from '../roleManagement/Roles';
import User from '../userManagement/Users';
import './content.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Accommodations from '../accommodationManagement/Accommodations';


export default function Content() {
  return (
    <div className="content">

      <Switch>
        <Router>
          <Route path="/dashboard/users">
            <User />
          </Route>
          <Route path="/dashboard/pensions">
            <Pensions />
          </Route>
          <Route path="/dashboard/reservations">
            <Reservations />
          </Route>


          <Route path="/dashboard/roles">
            <Roles />
          </Route>

          <Route path="/dashboard/accommodations">
            <Accommodations />
          </Route>
        </Router>
      </Switch>
    </div>
  );
}
