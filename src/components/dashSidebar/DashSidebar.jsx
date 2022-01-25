import './dashSidebar.css';
import { SidebarData } from './SidebarData';
import { Link } from "react-router-dom";
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
export default function DashSidebar() {
    const {url} = useRouteMatch(); 
    return (
        <div className="dashSidebar">
            <ul className="dashsidebarList">
                {SidebarData.map((val, key) => {
                     return (
                        <div id={window.location.pathname === val.link ? "active" : ""} className="row" key={key}>
                            <div id='icon'>
                                {val.icon}
                            </div>
                            <div id='title'>
                                <Link to={val.link} className="link">{val.title} </Link>
                            </div>
                        </div>
                    );

                })}
            </ul>
        </div>
    );
}
