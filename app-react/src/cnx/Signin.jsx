import {useState} from 'react'
import './Signin.css'

function Signin(props){

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [passOK, setPassOk] = useState(false);


    const [pass1, setPass1] = useState("");
    const [pass2, setPass2] = useState("");

    const getLogin = (evt) => {setLogin(evt.target.value)};
    const getFirstName = (evt) => {setFirstName(evt.target.value)};
    const getLastName = (evt) => {setLastName(evt.target.value)};
    const getPass1 = (evt) => {setPass1(evt.target.value)};
    const getPass2 = (evt) => {setPass2(evt.target.value)};


    const submissionHandler = (evt) =>{
        if (pass1==pass2) setPassOk(true);
    };


    return(

        <div class="Sign">
            <label htmlFor="firstname">First name</label><input id="firstname" onChange={getFirstName}/>
            <br></br>
             <label htmlFor="lastname">Lastname</label><input id="lastname" onChange={getLastName}/>
             <br></br>
             <label htmlFor="signin_login">Login</label><input id="signin_login" onChange={getLogin}/>
             <br></br>
             <label htmlFor="signin_mdp1">Password</label><input type="password" id="signin_mdp1" onChange={getPass1}/>
             <br></br>
            <label htmlFor="signin_mdp2">Password (2)</label><input type="password" id="signin_mdp2" onChange={getPass2}/>
            <br></br>
             <button onClick={submissionHandler}>Sign In</button><button type="reset">Reset</button>
           {passOK ? <p></p>:<p style={{color:"red"}}>Erreur: mots de passe différents</p>}



        </div>

    );






}

export default Signin