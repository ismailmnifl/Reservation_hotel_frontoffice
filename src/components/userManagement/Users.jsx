import userCSS from './users.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route ,Link} from "react-router-dom";
export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    
    const getAllUSers = async () => {
      const res = await axios.get("http://localhost:3030/users/");
      console.log(res.data);
      setUsers(res.data);
    }
    getAllUSers();
  }, []);

  return (
    <div className={userCSS.userManagement}>
      <div className={userCSS.wrapper}>
      <h2>User Management Section <small> Welcome</small></h2> <button className={userCSS.addNew}><Link to="/dashboard/addNewUser" className='link'>Add new</Link></button>
      </div>
      <ul className={userCSS.responsiveTable}>
        <li className={userCSS.tableHeader}>
          <div className={userCSS.col, userCSS.col1}>FirstName</div>
          <div className={userCSS.col, userCSS.col2}>LastName</div>
          <div className={userCSS.col, userCSS.col3}>Email</div>
          <div className={userCSS.col, userCSS.col4}>Phone Number</div>
          <div className={userCSS.col, userCSS.col5}>Role</div>
          <div className={userCSS.col, userCSS.col6}>Adresse</div>
          <div className={userCSS.col, userCSS.col7}>Actions</div>
        </li>
        {users.map((user) => (
          <li className={userCSS.tableRow} key={user._id}>
              <div className={userCSS.col, userCSS.col1} data-label="FirstName">{user.firstName}</div>
              <div className={userCSS.col, userCSS.col2} data-label="LastName">{user.lastName}</div>
              <div className={userCSS.col, userCSS.col3} data-label="Email">{user.email}</div>
              <div className={userCSS.col, userCSS.col4} data-label="Phone Number">{user.phoneNumber}</div>
              <div className={userCSS.col, userCSS.col5} data-label="Role">{user.role["description"]}</div>
              <div className={userCSS.col, userCSS.col6} data-label="Adresse">{user.adresse}</div>
              <div className={userCSS.col, userCSS.col7} data-label="Actions"><i style={{color:'rgb(60, 141, 60)',fontSize:'19px'}} className="fas fa-trash"></i><i style={{color:'rgb(199, 69, 69)',fontSize:'22px',position:'relative',top:'1px'}} className="fas fa-pen-square"></i></div>
          </li>
        ))}
      </ul>
    </div>
  );
}
/* 

*/