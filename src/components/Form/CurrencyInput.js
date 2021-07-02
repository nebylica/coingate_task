import {useState, useEffect} from 'react';
import {MdKeyboardArrowDown, TiArrowSortedUp} from "react-icons/all";
import icons from "../../assets/icons";

function CurrencyInput({currencyKeys, currencyName, setCurrencyName, currencyInput, currencyToCrypto, currencyInputEmpty}) {

    const [showCurrency, setShowCurrency] = useState(false)
    const [currencyIcons, setCurrencyIcons] = useState([])
    const [currencyIcon, setCurrencyIcon] = useState('EUR')

    useEffect(() => {
        let currencyValue = Object.keys(icons.currency)
        let icon = []
        currencyKeys.map(key => {
            if(currencyValue.includes(key)){
                icon.push(key)
            } else {
                icon.push("USD")
            }
        })
        setCurrencyIcons(icon)
    }, [])

    function setCurrency(e, i) {
        setCurrencyName(e.target.id)
        setCurrencyIcon(currencyIcons[i])
        setShowCurrency(!showCurrency)
    }

    return (
        <div className='input-container'>
            <div className='input-tag'>Pay</div>
            <input className='input-value' type="number" value={currencyInput} onChange={e => currencyToCrypto(e)}/>
            <div onClick={() => setShowCurrency(!showCurrency)} className='input-dropdown'>
                <img src={icons.currency[currencyIcon]} alt={currencyIcon}/>
                <div>{currencyName}</div>
                <MdKeyboardArrowDown />
            </div>
            {showCurrency && currencyIcons.length !== 0 ?
                (
                    <div className='dropdown'>
                        {currencyKeys.map((item, i) => (
                            <div onClick={e => setCurrency(e, i)} className='dropdown-option' key={i}>
                                <div id={item} className='option-value'> </div>
                                <img src={icons.currency[currencyIcons[i]]} className='icons-place' alt={currencyIcons[i]}/>
                                <div>{item}</div>
                            </div>
                        ))}
                    </div>
                ) : null
            }
            {currencyInputEmpty.error && (
                <div className='error-message'>
                    <TiArrowSortedUp className='error-arrow'/>
                    <div>{currencyInputEmpty.msg}</div>
                </div>
            )}
        </div>
    );
}

export default CurrencyInput;