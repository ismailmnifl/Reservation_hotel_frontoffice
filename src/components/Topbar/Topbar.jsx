import "./topbar.css";
import ProfileImage from '../../addOns/images/profile.png';
import { Link } from "react-router-dom";


export default function Topbar() {
    const user = false;
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
                <i className="topIcon fab fa-linkedin"></i>
                <i className="topIcon fab fa-twitter-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">

                    <li className="topListItem">
                        <Link to="/" className="link">Home</Link>
                    </li>
                    <li className="topListItem">About</li>
                    <li className="topListItem">
                        <Link to="/dashboard" className="link">Dashboard</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/reservations" className="link">Reservation</Link>
                    </li>
                    
                    <li className="topListItem">
                        {user && "LOGOUT"}
                    </li>


                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <img className="topImg" src={ProfileImage} alt="" />
                    ) : (
                        <>
                            <ul className="topList">
                                <li className="topListItem">
                                    <Link to="/login" className="link">LOGIN</Link>
                                </li>
                            </ul>
                        </>
                    )
                }

                <i className="topSearchIcon fas fa-search"></i>
            </div>

        </div>
    );

}
