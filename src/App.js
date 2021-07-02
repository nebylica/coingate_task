import {useState, useEffect} from 'react'
import {BrowserRouter as Router,Switch, Route,} from "react-router-dom";
import Toolbar from "./components/Toolbar/Toolbar";
import Main from "./components/Main/Main";
import http from './plugins/Fetch'

function App() {

    const [cryptoKeys, setCryptoKeys] = useState([])
    const [currencyKeys, setCurrencyKeys] = useState([])
    const [rates, setRates] = useState([])


    useEffect(() => {
        http.get('/getData').then(data => {
            setCryptoKeys(data.cryptoKeys)
            setCurrencyKeys(data.currencyKeys)
            setRates(data.rates)
        })
    }, [])


    return (
        <Router>
            <Toolbar />
            <Switch>
                <Route exact path='/'>
                    {currencyKeys.length !== 0 &&
                        <Main cryptoKeys={cryptoKeys}
                              currencyKeys={currencyKeys}
                              rates={rates}
                        />
                    }
                </Route>
                <Route exact path='/newWindow'>
                    <div className='newWindow'>
                        Buy crypto with us!
                    </div>
                </Route>
            </Switch>
        </Router>
  );
}

export default App;
