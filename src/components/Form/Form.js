import {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import './form.scss'
import PaymentMethods from "./PaymentMethods";
import CurrencyInput from "./CurrencyInput";
import CryptoInput from "./CryptoInput";


function Form({cryptoKeys, currencyKeys, rates}) {

    let history = useHistory()

    const [currencyName, setCurrencyName] = useState('EUR')
    const [cryptoName, setCryptoName] = useState('BTC')
    const [currencyInput, setCurrencyInput] = useState('')
    const [cryptoInput, setCryptoInput] = useState('')
    const [convert, setConvert] = useState('')
    const [currencyInputEmpty, setCurrencyInputEmpty] = useState({
        error: false,
        msg: ''
    })
    const [cryptoInputEmpty, setCryptoInputEmpty] = useState({
        error: false,
        msg: ''
    })

    function currencyToCrypto(e) {
        if(Number(e.target.value) < 0)
            return setCurrencyInputEmpty({error: true, msg: 'Please write only positive value.'})
        setCurrencyInputEmpty({error: false, msg: ''})
        setCurrencyInput(e.target.value)
        setConvert('currencyToCrypto')
    }

    function cryptoToCurrency(e) {
        if(Number(e.target.value) < 0)
            return setCryptoInputEmpty({error: true, msg: 'Please write only positive value.'})
        setCryptoInputEmpty({error: false, msg: ''})
        setCryptoInput(e.target.value)
        setConvert('cryptoToCurrency')
    }

    function submit() {
        if(Number(currencyInput) === 0 || currencyInput.length === 0)
            return setCurrencyInputEmpty({error: true, msg: 'Please write amount.'})
        if(Number(cryptoInput) === 0 || cryptoInput.length === 0)
            return setCryptoInputEmpty({error: true, msg: 'Please write amount.'})
        history.push('/newWindow')
    }

    useEffect(() => {
        if(rates.length !== 0) {
            if(convert === 'currencyToCrypto') {
                const pay = {
                    name: currencyName,
                    value: Number(currencyInput)
                }
                const buy = {
                    name: cryptoName,
                    value: Number(rates[currencyName][cryptoName])
                }
                setCryptoInput(pay.value * buy.value)
            }
            if(convert === 'cryptoToCurrency') {
                const pay = {
                    name: currencyName,
                    value: Number(rates[cryptoName][currencyName])
                }
                const buy = {
                    name: cryptoName,
                    value: Number(cryptoInput)
                }
                setCurrencyInput(buy.value * pay.value)
            }
        }
    }, [currencyInput, currencyName, cryptoInput, cryptoName])

    return (
        <div className='form-container'>
            <div className='form-background'> </div>
            <div className='form'>
                <CurrencyInput currencyKeys={currencyKeys}
                               currencyName={currencyName}
                               setCurrencyName={setCurrencyName}
                               currencyInput={currencyInput}
                               currencyToCrypto={currencyToCrypto}
                               currencyInputEmpty={currencyInputEmpty}/>
                <CryptoInput cryptoKeys={cryptoKeys}
                             setCryptoName={setCryptoName}
                             cryptoName={cryptoName}
                             cryptoInput={cryptoInput}
                             cryptoToCurrency={cryptoToCurrency}
                             cryptoInputEmpty={cryptoInputEmpty}/>
                <p>Payment method</p>
                <PaymentMethods />
                <div onClick={submit} className='submit-buy'>Buy {cryptoName}</div>
            </div>
        </div>
    );
}

export default Form;