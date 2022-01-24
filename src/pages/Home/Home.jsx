import './home.css';
import Header from '../../components/Header/Header';
import HomePost from '../../components/HomePost/HomePost';
import SideBar from '../../components/Sidebar/SideBar';
import { useEffect, useState } from 'react';
import axios from 'axios';



export default function Home() {
    const [users,setUsers] = useState([]);

    useEffect(()=> {
       const getAllUSers = async () => {
            const res = await axios.get("http://localhost:3030/users/61e9cd9860547a87d3573bf2");
            console.log(res.data);
       }
       getAllUSers();
    },[])
    return (
        <>
        <Header/>
        <div className="home">
            <HomePost/>
            <SideBar/>
        </div>
        </>
    );
}
