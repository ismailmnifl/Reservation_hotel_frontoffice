import './dashSidebar.css';
import { SidebarData } from './SidebarData';
;

export default function DashSidebar() {
    return (
        <div className="dashSidebar">
            <ul className="dashsidebarList">
                {SidebarData.map((val, key) => {
                    return (
                        <div id={window.location.pathname == val.link ? "active" : ""} className="row" key={key} onClick={()=> {window.location.pathname = val.link}}>
                            <div id='icon'>
                                {val.icon}
                            </div>
                            <div id='title'>
                                {val.title}
                            </div>
                        </div>
                    );

                })}
            </ul>
        </div>
    );
}
