import { BiHome, BiDetail, BiCreditCard } from "react-icons/bi";
import {  MdMonetizationOn } from "react-icons/md";

export const ContentNavbar = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'Sign-In',
        path: '/Parent-Dashboard',
        subnav:  [{
            title: 'Home',
            path: '/Parent-Dashboard',
            icon: <BiHome></BiHome>
        },
        {
            title: 'Payment',
            path: '/Parent-Dashboard/Payment',
            icon: <MdMonetizationOn></MdMonetizationOn>
        },
        {
            title: 'Transactions',
            path: '/Parent-Dashboard/Transactions',
            icon:  <BiCreditCard></BiCreditCard>
        },
        {
            title: 'Result',
            path: '/Parent-Dashboard/Result',
            icon: <BiDetail></BiDetail>
        } ]
    }
]