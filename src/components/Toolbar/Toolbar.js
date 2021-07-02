import {Link} from 'react-router-dom'
import './toolbar.scss'
import logo from '../../assets/img/logo.png'
import {MdKeyboardArrowRight, HiMenuAlt2} from 'react-icons/all'


function Toolbar() {
    return (
        <header>
            <div className='toolbar'>
                <div className='nav-container'>
                    <div className='nav-left'>
                        <Link to='/'>
                            <img src={logo} alt='coingate-logo'/>
                        </Link>
                        <div className='nav'>Products</div>
                        <div className='nav'>Resources</div>
                        <Link to='/'>
                            <div className='nav'>Buy Instantly</div>
                        </Link>
                    </div>
                    <div className='nav-right'>
                        <div className='nav'>Log In</div>
                        <div className='nav-sign-btn'>
                            <div>Sign Up</div>
                            <MdKeyboardArrowRight />
                        </div>
                        <div className='burger-menu'>
                            <HiMenuAlt2 />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Toolbar;