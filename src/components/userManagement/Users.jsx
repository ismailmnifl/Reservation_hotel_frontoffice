import userCSS from './users.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
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
      <h2>User Management Section <small> Welcome</small></h2> <button className={userCSS.addNew}>add new</button>
      </div>
      <ul className={userCSS.responsiveTable}>
        <li className={userCSS.tableHeader}>
          <div className={userCSS.col, userCSS.col1}>FirstName</div>
          <div className={userCSS.col, userCSS.col2}>LastName</div>
          <div className={userCSS.col, userCSS.col3}>Email</div>
          <div className={userCSS.col, userCSS.col4}>Phone Number</div>
          <div className={userCSS.col, userCSS.col5}>Role</div>
          <div className={userCSS.col, userCSS.col6}>Adresse</div>
        </li>
        {users.map((user) => (
          <li className={userCSS.tableRow} key={user._id}>
              <div className="col col-1" data-label="FirstName">{user.firstName}</div>
              <div className="col col-2" data-label="LastName">{user.lastName}</div>
              <div className="col col-3" data-label="Email">{user.email}</div>
              <div className="col col-4" data-label="Phone Number">{user.phoneNumber}</div>
              <div className="col col-5" data-label="Role">{user.role["description"]}</div>
              <div className="col col-6" data-label="Adresse">{user.adresse}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
/* 


 <div id="test-list">
    <input type="text" class="search" />
    <ul class="list">
      <li><p class="name">Guybrush Threepwood</p></li>
      <li><p class="name">Elaine Marley</p></li>
      <li><p class="name">LeChuck</p></li>
      <li><p class="name">Stan</p></li>
      <li><p class="name">Voodoo Lady</p></li>
      <li><p class="name">Herman Toothrot</p></li>
      <li><p class="name">Meathook</p></li>
      <li><p class="name">Carla</p></li>
      <li><p class="name">Otis</p></li>
      <li><p class="name">Rapp Scallion</p></li>
      <li><p class="name">Rum Rogers Sr.</p></li>
      <li><p class="name">Men of Low Moral Fiber</p></li>
      <li><p class="name">Murray</p></li>
      <li><p class="name">Cannibals</p></li>
    </ul>
    <ul class="pagination"></ul>
  </div>


*/