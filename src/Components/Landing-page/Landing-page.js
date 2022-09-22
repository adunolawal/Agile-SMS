import Money from './ImagesTwo/Money.svg';
import card2 from './ImagesTwo/card2.png';
import Phone from './ImagesTwo/Phone.svg';
import Call from './ImagesTwo/Call.svg';
import '../Landing-page/Landing-page.css'
import stock from './ImagesTwo/stock.png'
import { FiChevronsDown } from "react-icons/fi";
import { ImProfile , ImUserTie } from "react-icons/im";
import Navbar from './Navbar';


const LandingPage = () => {
    return ( 
        <div className='landingpage'>
            <Navbar></Navbar>
            <div className='try'>
                <div className='title'>
                    <h1>School Management<br></br> System</h1>
                    <span> A multi-faceted system providing teamwork between Schools and Parents </span>
                    <button>Join us Today</button>  <button>Sign In</button>
                </div>
                <div className='imgs'>
                    <img src={card2} alt="Parents"></img>
                </div>
            </div>
            <div className='easy'>
                <h1>The easy way out</h1>
                <p className='easySpan'>
                    SMS provides a comprehensive management system that helps you efficiently
                    streamline operations and reduce resources and costs within your school organization.
                </p>
                <div>
                    <div className='administrator'>
                        <div className='logo1'>
                            <ImProfile></ImProfile>
                        </div>
                        <div className='admin'>
                            <p>School administrators</p>
                        </div>
                        <FiChevronsDown></FiChevronsDown>
                    </div>
                    <button className='parent'>
                        <div className='logo2'>
                            <ImUserTie></ImUserTie>
                        </div>
                        <div className='admin'>
                            <p>Parents</p>
                        </div>
                        <FiChevronsDown></FiChevronsDown>
                    </button>
                </div>
            </div>
            <div className='whyChoose'>
                <div className='why'>
                    <div>
                        <img className='imgsTwo' src={stock} alt="children"></img>
                    </div>
                    <div className='about'>
                        <h2>Why Choose us?</h2>
                        We provide a perfect framework that the Nigerian education system needs. 
                        The complexity in managing school operations can be reduced with the help of School Management System.
                        We provide unique communication and workflow tools to keep
                        the school, parents and pupils connected in a trackable way.
                        It saves time, effort, preserve records, ease school results compilation,
                        reduces costs and paper work.
                    </div>
                </div>  
            </div> 
            <div className='flexTwo'>
                <div class="whyAffiliatesPerks" >
                    <div class="manOnMoneyImage">
                        <img src={Money} alt="Money"></img>
                    </div>
                    <div>
                        <div class="manOnMoneyBold" >
                            Fast and Easy fees payment  
                        </div>
                        <div class="manOnMoneyNote">
                            SMS allows direct payment to the school.
                            We provide firm foundation for the school's financial data 
                            by ensuring that transactions are monitored and validated fast with ease.
                        </div>
                    </div>
                </div>
                <div class="whyAffiliatesPerks">
                    <div class="manOnMoneyImage">
                        <img src={Phone} alt="Phone"></img>
                    </div>
                    <div>
                        <div class="manOnMoneyBold">
                            Stress free result compilation 
                        </div>
                        <div class="manOnMoneyNote">
                            Our platform is equipped with a fast, 100% accurate, and effortless result compilation
                            of all students which can be easily accessed on our user friendly and intuitive interface by parents.
                        </div>
                    </div>
                </div>
                <div class="whyAffiliatesPerks" >
                    <div class="manOnMoneyImage">
                        <img src={Call} alt="Call"></img>
                    </div>
                    <div>
                        <div class="manOnMoneyBold">
                            Training and Support
                        </div>
                        <div class="manOnMoneyNote">
                            Change can be daunting and we know. Our experts and support system are here to train and assist you
                            with unlimited support.
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {/* <img className='teacher' src={Teachers} alt="education"></img> */}
            </div>
        </div>
    );
}
 
export default LandingPage;