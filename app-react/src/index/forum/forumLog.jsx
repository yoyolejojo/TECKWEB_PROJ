// Affiche l'ajout de message si l'utilisateur est connecté


import {useState} from 'react'

function forumLog(props){


    return(

        <div class="new_mess">
            <input name="new_message" id="nouveaux_message"></input>
            <button>Ajouter</button>
        </div>

    )

}

export default forumLog