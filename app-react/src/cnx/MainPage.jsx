import { useState } from 'react'
import './App.css'
import NavigationPanel from './NavigationPanel';
import Signin from "./Signin";

function MainPage(){
    const [isConnected, setConnect] = useState(false);
    const [page, setPage] = useState("signin_page");
    

    const getConnected = () =>{

        setConnect(true);
        setPage("message_page");
    
    
    }
    
    const seLogout = () =>{
    
        setConnect(false);
        setPage("signin_page");
    
    }



    return(
        <>

        <h1>Organiz' Asso</h1>

        <div>
            {page==="signin_page"? <Signin /> : <NavigationPanel login={getConnected} logout={seLogout} isConnected={isConnected} />}
        </div>
        <div>
            
        </div>
        </>

    );

}






export default MainPage