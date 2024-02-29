import { useState } from 'react'
import MainPage from './MainPage'
import './Login.css'

function Login(props){

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const getLogin = (evt) => {setLogin(evt.target.value)};
    const getPassword = (evt) => {setPassword(evt.target.value)};



    return(
        
        <form method="POST" action="" class="form_mess">
            <label htmlFor="login" class="first_row">Login</label><input id="login" onChange={getLogin} class="second_row"></input>
            <br></br>
            <label htmlFor="mdp" class="first_row">Mot de passe</label><input type="password "id="mdp" onChange={getLogin} class="second_row"></input>
            <br></br>
            <button type="submit" class="first_row">Connexion</button><button type="reset" class="second_row">Annuler</button>

        </form>
        

    )
}

export default Login