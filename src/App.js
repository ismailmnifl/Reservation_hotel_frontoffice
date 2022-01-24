import Topbar from "./components/Topbar/Topbar";
import Home from "../src/pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Setting from "./pages/setting/Setting";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  const user = false;
      return (

            <Router>
              <Topbar/>
              <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route path="/login">
              {user ? <Home/> : <Login/>}

              </Route>
              <Route path="/register">
                {user ? <Home/> : <Register/>}
              </Route>
              <Route path="/dashboard">
              {user ? <Dashboard/> : <Login/>}

              </Route>
              <Route path="/setting">
              {user ? <Setting/> : <Login/>}

              </Route>
              </Switch>
            </Router>

      );
}

export default App;
