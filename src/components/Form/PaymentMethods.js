import {useState} from 'react'
import {MdKeyboardArrowDown} from "react-icons/all";
import './form.scss'
import sepa from "../../assets/img/sepa.png";
import visaMastercard from "../../assets/img/visa-mastercard.png";
import applePay from "../../assets/img/apple-pay.png";

function PaymentMethods() {

    const paymentMethods = [
        {
            img: sepa,
            method: 'Bank Transfer'
        },
        {
            img: visaMastercard,
            method: 'Card'
        },
        {
            img: applePay,
            method: 'Apple Pay'
        }
    ]

    const [showPayments, setShowPayments] = useState(false)
    const [paymentIndex, setPaymentIndex] = useState(0)

    return (
        <div onClick={() => setShowPayments(!showPayments)} className='input-container'>
            <div className='input-payment'>
                <div className='input-payment-option'>
                    <img src={paymentMethods[paymentIndex].img} alt={paymentMethods[paymentIndex].method}/>
                    <div>{paymentMethods[paymentIndex].method}</div>
                </div>
                <MdKeyboardArrowDown />
            </div>
            {showPayments && (
                <div className='dropdown-payment'>
                    {paymentMethods.map((item, i) => (
                        <div onClick={e => setPaymentIndex(Number(e.target.id))} className='dropdown-option' key={i}>
                            <div className='option-value' id={i}> </div>
                            <div className='dropdown-payment-img-box'>
                                <img src={item.img} alt={item.method}/>
                            </div>
                            <div>{item.method}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default PaymentMethods;