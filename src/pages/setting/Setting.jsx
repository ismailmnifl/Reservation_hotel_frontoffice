import SideBar from '../../components/Sidebar/SideBar';
import ProfileImage from '../../addOns/images/profile.png';
import './setting.css';

export default function Setting() {
    return (
        <div className="setting">
            <div className="settingWrapper">
                <div className="settingsTitle">
                    <span className="settingsTitleUpdate">Update Your Account</span>
                    <span className="settingsTitleDelete">Delete Account</span>
                </div>
                <div className="container">
                <div className="wrapper">
                    <form action="">   
                    <img className="settingProfileImage" src={ProfileImage} alt="" />                   
                        <div className="inputBox">
                            <label id="custom-file-upload" htmlFor="file-upload" className="custom-file-upload">
                                upload image
                            </label>
                            <input id="file-upload" name="image" type="file" />
                        </div>
                        <div className="inputBox">
                            <label>FirstName</label>
                            <input type="text" name="firstName" />
                        </div>

                        <div className="inputBox">
                            <label>LastName</label>
                            <input type="text" name="lastName" />
                        </div>

                        <div className="inputBox">
                            <label>Email</label>
                            <input type="text" name="email" />
                        </div>

                        <div className="inputBox">
                            <label>Password</label>
                            <input type="password" name="password" />
                        </div>
                        <div className="inputBox">
                            <label>Phone Number</label>
                            <input type="text" name="phone" />
                        </div>
                        <div className="inputBox">
                            <label>Adresse</label>
                            <input type="text" name="adress" />
                        </div>
                        <button type="submit" className="btnReverse">Submit</button>
                    </form>
                </div>
            </div>
            </div>
            <SideBar />
        </div>
    );
}
