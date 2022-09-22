import { BiHome, BiCalendarEdit } from "react-icons/bi";
import { ImUserTie, ImAddressBook } from "react-icons/im";
import { FaRegAddressCard, FaWpforms } from "react-icons/fa";
import {RiArrowDownSFill ,  RiArrowUpSFill} from "react-icons/ri";

export const SchoolSidebar = [
    {
        title: 'Home',
        path: '/',
        icon: <BiHome></BiHome>
    },
    {
        title: 'Students',
        path: '/Students',
        icon: <ImAddressBook />
    },
    {
        title: 'Parents',
        path: '/Parents',
        icon:  <ImUserTie/>
    }, 
    {
        title: 'Forms',
        path: '/Forms',
        icon:   <FaWpforms />,
        iconClosed: <RiArrowDownSFill />,
        iconOpened: <RiArrowUpSFill />,
        subNav: [
           {
            title: 'Student Form',
            path: '/Forms/Student-Form',
            icon:   <FaWpforms />
           },
           {
            title: 'Parent Form',
            path: '/Forms/Parent-Form',
            icon:   <FaWpforms />
           },
           {
            title: 'Staff Form',
            path: '/Forms/Staff-Form',
            icon:   <FaWpforms />
           }
        ]
    },
    {
        title: 'Result',
        path: '/Result',
        icon:   <FaRegAddressCard />
    },
    {
        title: 'Payments',
        path: '/Payments',
        icon:  <FaRegAddressCard />
    },
    {
        title:  'Calendar',
        path: '/Calendar',
        icon:  <BiCalendarEdit />
    }, 
    {
        title:  'Account',
        path: '/Account',
        icon:  <BiCalendarEdit />
    }
]