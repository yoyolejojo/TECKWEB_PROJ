// Va nous permettre de créer un composant lorsque 
// L'utilisateur n'est pas connecté, le but est d'afficher
// Un message du style "Connectez vous pour avoir accès au forum"


import { useState } from 'react'

function forumNotLog(){


    return(

        <div>

            <h1>Vous n'êtes pas connectez ! Inscrivez-vous ou connectez vous 
                Pour avoir accès au forum ! </h1>

        </div>

    )

}

export default forumNotLog