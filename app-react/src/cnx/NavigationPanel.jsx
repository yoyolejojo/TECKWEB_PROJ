import { useState } from 'react'
import Logout from './Logout';
import Login from './Login';
import './App.css'

function NavigationPanel(props){



    return(

        <nav id="navigation_pan">
            {(props.isConnected) ? <Logout logout={props.logout}/> : <Login login={props.login}/>}
        </nav>

    )


}

export default NavigationPanel