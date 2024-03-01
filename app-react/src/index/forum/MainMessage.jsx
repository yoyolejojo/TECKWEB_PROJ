import { useState } from 'react'
import './MainMessage.css'
import forumNotLog from './forumNotLog'
import forumLog from './forumLog'


function MainMessage(props){


    const [isConnected, setConnect] = useState(false);
    const [page, setPage] = useState("log")

    const getConnected = () =>{

        setConnect(true);
        setPage("log");
    
    
    }

    // On veut faire une methode qui permet d'afficher le forum
    // ou non selon si l'utilisateur est connecté



    return (

    <div>


        <div>

            {isConnected==true? <forumLog /> : <forumNotLog />}

        </div>
    {/* // <div class="mess">
    //     <div class="new_mess">
    //         <input name="new_message" id="nouveaux_message"></input>
    //         <button>Ajouter</button>
    //     </div> */}

        {/* <div class="list_mess">
            <ul>
                <li>Un nouveaux message</li>
                <li>Un autre message qui est très sympa</li>
            </ul>

        </div> */}


    </div>

    )

}

export default MainMessage