
import { Outlet } from "react-router-dom";
import './content.css';




export default function Content() {

 
  return (
    <div className="content">
      <Outlet/>
    </div>
  );
}
