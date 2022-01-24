import './sidebar.css';
import ProfileImage from '../../addOns/images/aboutme.jpg';

export default function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">
                    ABOUT US
                </span>
                <img src={ProfileImage} alt="" />
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Tenetur fugiat odio quae minus sed neque natus,
                    est magni consectetur
                </p>

            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">
                    CATEGORIES
                </span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Reservations</li>
                    <li className="sidebarListItem">Pensions</li>
                    <li className="sidebarListItem">accommodations</li>
                    <li className="sidebarListItem">Extras</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">
                    FOLLOW US
                </span>
                <div className="sidebarCosial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                    <i className="sidebarIcon fab fa-linkedin"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                </div>
            </div>
        </div>
    );
}
