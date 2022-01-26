import pensionStyles from './pension.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
export default function Pensions() {
  
  const [pensions, setPensions] = useState([]);

  useEffect(() => {

    const getAllPensions = async () => {
      const res = await axios.get("http://localhost:3030/pension/");
      console.log(res.data);
      setPensions(res.data);
    }
    getAllPensions();
  }, []);

  return (
      <div className={pensionStyles.pension}>
           <div className={pensionStyles.wrapper}>
      <h2>Pensions Management Section <small> Welcome</small></h2> <button className={pensionStyles.addNew}>add new</button>
      </div>
      <ul className={pensionStyles.responsiveTable}>
        <li className={pensionStyles.tableHeader}>
          <div className={pensionStyles.col ,pensionStyles.col1}>Index</div>
          <div className={pensionStyles.col ,pensionStyles.col2}>Pension Type</div>
          <div className={pensionStyles.col ,pensionStyles.col3}>Half Type</div>
         
        </li>
        {pensions.map((pension) => (
          <li className={pensionStyles.tableRow} key={pension._id}>
              <div className={pensionStyles.col ,pensionStyles.col1} data-label="Index">{pension._id}</div>
              <div className={pensionStyles.col ,pensionStyles.col2} data-label="Pension Type">{pension.pensiontype}</div>
              <div className={pensionStyles.col ,pensionStyles.col3} data-label="Half Type">{pension.halfType}</div>
          </li>
        ))}
      </ul>
      </div>
  );
}
