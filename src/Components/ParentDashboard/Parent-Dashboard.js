import Home from "./Dashboard-perks/Home";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Payment from "./Dashboard-perks/Payment";
import { FiUser, FiLogOut } from "react-icons/fi";
import {Sidebar} from "./Sidebar"
import  "./Parent-Dashboard.css"
import Transactions from "./Dashboard-perks/Transactions";
import { useState } from "react";
import Result from "./Dashboard-perks/Result";

const ParentDashboard = () => {
    const [logoutPop, setLogoutPop] = useState(false)

    const togglepopUp = () =>{
        setLogoutPop(!logoutPop)
    }

    return (
        <div className="parent-dashboard">
            <Router>
                <div className="side-bar">
                    <div className="parent-profile">
                        <div className="small-profile">
                            <FiUser></FiUser>
                        </div>
                        <div className="parent-name">
                            <span className="names" > Lawal Adunola </span>
                            <span> Parent/Guardian  </span>
                        </div>
                    </div>
                   <div className="iconWords">
                        <ul className="side-ul">
                            { Sidebar.map((i,index) => {
                            return( <li className="side-li" key={index}  activeclassName="active" >
                            <Link to={i.path}  >
                                <span>{i.icon} </span>
                                <span>{i.title}</span>
                            </Link>
                            </li>) }) }
                        </ul>
                   </div>
                   <div className="log-out">
                        <FiLogOut></FiLogOut>
                        <span onClick={togglepopUp} >Log out</span>
                   </div>
                </div>
                <div className="routes">
                    <Routes>
                        <Route path='/' exact element={<Home></Home>} />
                        <Route path='/Payment' element={<Payment></Payment> } />
                        <Route path='/Transactions' element={ <Transactions> </Transactions>} />
                        <Route path='/Result' element={ <Result> </Result>} />
                    </Routes>
                    {logoutPop && 
                        <div className="bgnd" onClick={togglepopUp}> 
                            <div className="modal">
                                Are you sure you want to log out
                                <div className="btns"> 
                                    <button onClick={togglepopUp}> Go back </button>
                                    <button> Log out </button>   
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </Router> 
        </div>
    );
}
 
export default ParentDashboard;