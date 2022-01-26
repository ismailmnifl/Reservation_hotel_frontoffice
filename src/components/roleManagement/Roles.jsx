import rolesCSS from './roles.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
export default function Roles() {

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
    <div className={rolesCSS.roles}>
      <div className={rolesCSS.containerWrapper}>
        <div className={rolesCSS.wrapper}>
          <h2>Pensions Management</h2> <div className={rolesCSS.addNewWrapper}><input type="text" placeholder='Enter the new Role here !' /> <button className={rolesCSS.addNew}>add new</button></div> 
        </div>
        <ul className={rolesCSS.responsiveTable}>
          <li className={rolesCSS.tableHeader}>
            <div className={rolesCSS.col, rolesCSS.col1}>Index</div>
            <div className={rolesCSS.col, rolesCSS.col2}>Descriptions</div>

          </li>
          {roles.map((role) => (
            <li className={rolesCSS.tableRow} key={role._id}>
              <div className={rolesCSS.col, rolesCSS.col1} data-label="Index">{role._id}</div>
              <div className={rolesCSS.col, rolesCSS.col2} data-label="Pension Type">{role.description}</div>
            </li>
          ))}
        </ul>
      </div>
      
    </div>
  );
}
