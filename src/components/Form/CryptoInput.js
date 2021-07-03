import {useState} from 'react';
import icons from "../../assets/icons";
import {MdKeyboardArrowDown, TiArrowSortedUp} from "react-icons/all";

function CryptoInput({cryptoKeys, cryptoName, setCryptoName, cryptoInput, cryptoToCurrency, cryptoInputEmpty}) {

    const [showCrypto, setShowCrypto] = useState(false)

    function setCrypto(e) {
        setCryptoName(e.target.id)
        setShowCrypto(!showCrypto)
    }

    return (
        <div className='input-container'>
            <div className='input-tag'>Buy</div>
            <input className='input-value' type="text" value={cryptoInput} onChange={e => cryptoToCurrency(e)}/>
            <div onClick={() => setShowCrypto(!showCrypto)} className='input-dropdown'>
                <img src={icons.crypto[cryptoName]} alt={cryptoName}/>
                <div>{cryptoName}</div>
                <MdKeyboardArrowDown />
            </div>
            {showCrypto && (
                <div className='dropdown'>
                    {cryptoKeys.map((item, i) => (
                        <div onClick={e => setCrypto(e)} className='dropdown-option' key={i}>
                            <div id={item} className='option-value'> </div>
                            <img src={icons.crypto[item]} className='icons-place' alt={item}/>
                            <div>{item}</div>
                        </div>
                    ))}
                </div>
            )}
            {cryptoInputEmpty.error && (
                <div className='error-message'>
                    <TiArrowSortedUp className='error-arrow'/>
                    <div>{cryptoInputEmpty.msg}</div>
                </div>
            )}
        </div>
    );
}

export default CryptoInput;