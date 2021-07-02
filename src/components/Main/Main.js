import './main.scss'
import {MdKeyboardArrowRight} from 'react-icons/all'
import {Link} from "react-router-dom";
import Form from "../Form/Form";

function Main({currencyKeys, cryptoKeys, rates}) {

    return (
        <div className='main'>
            <div className='background'> </div>
            <div className='main-grid'>
                <h1 className='main-heading'>
                    <span className='main-heading-span'>Buy Bitcoin,</span>
                    Ethereum, Litecoin and other crypto
                    <span className='main-heading-span'>online</span>
                </h1>
                <div>
                    <p className='main-text'>Why bother going through complicated exchanges? Buy cryptocurrency with top payment methods like SEPA bank transfer, Credit and Debit Card, Apple Pay, Mobile balance or Klarna. You can buy Bitcoin, Ethereum or any other popular crypto directly to your personal wallet without making any initial deposits. It’s as easy as it gets!</p>
                    <Link to='/newWindow'>
                        <div className='main-link'>
                            <div>Start now</div>
                            <MdKeyboardArrowRight />
                        </div>
                    </Link>
                </div>
                <Form currencyKeys={currencyKeys} cryptoKeys={cryptoKeys} rates={rates}/>
            </div>
        </div>
    );
}

export default Main;