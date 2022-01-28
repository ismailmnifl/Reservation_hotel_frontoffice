import DashSidebar from '../dashSidebar/DashSidebar';
import Topbar from '../Topbar/Topbar';
import AddNewUserCSS from './addNewUser.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function AddNewUser() {
    const [roles, setRoles] = useState([]);

    useEffect(() => {

        const getAllRoles = async () => {
            const res = await axios.get("http://localhost:3030/role/");
            console.log(res.data);
            setRoles(res.data);
        }
        getAllRoles();
    }, []);
    return (
        <div>
            <div className={AddNewUserCSS.formWrapper}>
                <form action="">
                    <div className={AddNewUserCSS.firstLastName}>
                        <div className={AddNewUserCSS.inputGroupIn}>
                            <label htmlFor="">FirstName</label>
                            <input type="text" placeholder='Enter Your LastName' />
                        </div>
                        <div className={AddNewUserCSS.inputGroupIn}>
                            <label htmlFor="">LastName</label>
                            <input type="text" placeholder='Enter Your FirstName' />
                        </div>
                    </div>
                    <div className={AddNewUserCSS.inputGroupOut}>
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder='Enter Your Email' />
                    </div>
                    <div className={AddNewUserCSS.inputGroupOut}>
                        <label htmlFor="">Phone Number</label>
                        <input type="text" placeholder='Enter Your Phone Number' />
                    </div>

                    <div className={AddNewUserCSS.inputGroupOut}>
                        <label htmlFor="">Password</label>
                        <input type="password" placeholder='Enter Your Password' />
                    </div>

                    <div className={AddNewUserCSS.inputGroupOut}>
                        <label htmlFor="">Role</label>
                        <select name="role" id="role">
                            <option value="" selected disabled>--select the user role--</option>
                            {roles.map((role) => (
                                <option value={role._id}>{role.description}</option>
                            ))}
                        </select>
                    </div>
                    <div className={AddNewUserCSS.inputGroupOut}>
                        <button className={AddNewUserCSS.btn}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
