import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import SchoolHome from './SchoolDashboardPerks/SchoolHome';
import { SchoolSidebar } from './SchoolSidebar';
import '../SchoolDashboard/SchoolDashboard.css';
import { GrOrganization} from "react-icons/gr";
import Students from './SchoolDashboardPerks/Students';
import SchoolParents from './SchoolDashboardPerks/SchoolParents';
import SchoolResults from './SchoolDashboardPerks/SchoolResults';
import SchoolCalendar from './SchoolDashboardPerks/SchoolCalendar';
import { useState } from 'react';
import StudentForm from './SchoolDashboardPerks/SchoolForms/StudentForm';
import ParentForm from './SchoolDashboardPerks/SchoolForms/ParentForm';
import Forms from './SchoolDashboardPerks/SchoolForms/Forms';
import SchoolAccount from './SchoolDashboardPerks/SchoolAccount';
// import { ImInsertTemplate } from 'react-icons/im';

const SchoolDashboard = () => {

    const [subnav , setSubnav] = useState(false);
    const showSubnav = () => {
        setSubnav(!subnav)
    }

    return ( 
        <div className='schoolDashboard'>
            <Router>
                <div className='sideBar'>
                    <div className='smallProfile'>
                        <span><GrOrganization /> </span>
                        <h6> Institute Name </h6>
                    </div>
                    <ul>
                        {SchoolSidebar.map((i,index) => {
                            return( 
                               <div key={index}>
                                    <Link to={i.path}  key={index} onClick={i.subNav && showSubnav} >
                                        <li >
                                            <span>{i.icon} </span>
                                            <span>{i.title}</span>
                                            <div>
                                                {i.subNav && subnav ? i.iconOpened: i.subNav ? i.iconClosed: null }
                                            </div>                                     
                                        </li>                                                        
                                    </Link>   
                                    { subnav && i.subNav?.map( (item, index) => {
                                        return( <Link to={item.path}  key={index}>
                                            <li className='subnav'>
                                                <span>{item.icon}</span>
                                                <span>{item.title}</span> 
                                            </li>
                                        </Link>
                                    ) })}      
                               </div>                        
                            )})                           
                        } 
                    </ul>
                </div>
                <div className='routes'>
                    <Routes>
                        <Route path='/' exact element={<SchoolHome />} />   
                        <Route path='/Students' element={<Students /> } />  
                        <Route path='/Parents' element={<SchoolParents/> } />    
                        <Route path='/Forms' element={<Forms /> } />    
                        <Route path='/Forms/Student-Form' element={<StudentForm /> } />    
                        <Route path='/Forms/Parent-Form' element={<ParentForm /> } />   
                        <Route path='/Result' element={<SchoolResults /> } />     
                        <Route path='/Calendar' element={<SchoolCalendar /> } />   
                        <Route path='/Account' element={<SchoolAccount /> } />  
                    </Routes>
                </div>
            </Router>
        </div>
    );
}
 
export default SchoolDashboard;
