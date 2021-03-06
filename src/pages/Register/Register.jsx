import { Link } from 'react-router-dom';
import './register.css';
import {useNavigate } from "react-router-dom";


export default function Register() {

  let navigate = useNavigate();

  return (
      <div className="register">
           <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Firstname</label>
        <input className="registerInput" type="text" placeholder="Enter your firstname..." />
        <label>Lastname</label>
        <input className="registerInput" type="text" placeholder="Enter your lastname..." />
        <label>Email</label>
        <input className="registerInput" type="text" placeholder="Enter your email..." />
        <label>Phone Number</label>
        <input className="registerInput" type="text" placeholder="Enter your Phone Number..." />
        
        <label>Password</label>
        <input className="registerInput" type="password" placeholder="Enter your password..." />
        <label>Adresse</label>
        <input className="registerInput" type="text" placeholder="Enter your Adresse..." />
        <button className="registerButton">Register</button>
      </form>
        <button className="registerLoginButton" onClick={()=> {
            navigate("/login");
        }}>Login</button>
      </div>
  );
}
