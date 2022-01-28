import './dashSidebar.css';
import { SidebarData } from './SidebarData';
import { BrowserRouter as Router, Routes, Route, Outlet,NavLink } from "react-router-dom";


export default function DashSidebar() {

    return (
        <div className="dashSidebar">
            <ul className="dashsidebarList">
            <div className="row">
                    <div id='icon'><i className="fas fa-pizza-slice" /></div>
                    <div id='title'><NavLink className="link" to="/dashboard/pensions">Pensions</NavLink></div>
                </div>
                <div className="row">
                    <div id='icon'><i className="fas fa-building" /></div>
                    <div id='title'><NavLink className="link" to="/dashboard/accommodations">Accommodations</NavLink></div>
                </div>
                <div className="row">
                    <div id='icon'><i className="fas fa-users" /></div>
                    <div id='title'><NavLink className="link" to="/dashboard/users">Users</NavLink></div>
                </div>
                <div className="row">
                    <div id='icon'><i className="fas fa-ticket-alt" /></div>
                    <div id='title'><NavLink className="link" to="/dashboard/reservations">Reservations</NavLink></div>
                </div>
                <div className="row">
                    <div id='icon'><i className="fas fa-user-tag" /></div>
                    <div id='title'><NavLink className="link" to="/dashboard/roles">Roles</NavLink></div>
                </div>
            </ul>
        </div>
    );




}
