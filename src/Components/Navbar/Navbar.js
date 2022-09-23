// import {BrowserRouter, Link, Route, Routes } from "react-router-dom";
// import LandingPage from "../Landing-page/Landing-page";
// import { ContentNavbar } from "./ContentNavbar";
// import "./Navbar.css";
// import { useState } from "react";

// const Navbar = () => {

//     const [subnav , setSubnav] = useState(false);
//     const showSubnav = () => {
//         setSubnav(!subnav)
//     }

//     return ( 
//         <div>
//             <BrowserRouter>
//                 <nav className="navbar">
//                     <ul>
//                         { ContentNavbar.map((i, key) => {
//                             return( <div  key={key}> 
//                                 <Link to={i.path} onClick={i.subnav && showSubnav}>
//                                 <li>{i.title}</li>  
//                             </Link>                           
//                             </div> )
//                         })}
//                     </ul>
//                 </nav>
//                     <Routes>
//                         <Route path='/' exact element={ <LandingPage /> }  />
//                     </Routes>
//             </ BrowserRouter>
//         </div>
//      );
// }
 
// export default Navbar;