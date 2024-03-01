import { useState } from 'react'
import './MainHeader.css'

function MainHeader(){
    return(

        
        <div class="header">

            <div class="logo">
                <img src="assets/logo2.png" alt="logo" id="img_logo"></img>
            </div>

            <div class="search">
                <input name="search"></input>
                
                <input type="date" name="debut_rech"></input>
                <input type="date" name="fin_rech"></input>

                <button>Rechercher</button>

            </div>  

        <div class="link">
            <p><a href="../../connexion.html">CONNEXION</a></p>
            
        </div>

        </div>
        

    );
} 

export default MainHeader