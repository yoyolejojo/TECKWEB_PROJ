import { useState } from 'react'
import './MainMessage.css'


const MainMessage = () => {

    const [isConnected, setIsConnected] = useState(true);
    const [inputValue, setInputValue] = useState('');
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        alert(`Contenu ajouté : ${inputValue}`);
        
        setInputValue('');
    };
    
    return (
        <div>
        {!isConnected ? (
            <p id="notlog">CONNECTEZ VOUS OU INSCRIVEZ VOUS SUR ORGANIS'ASSO POUR ACCEDER AU FORUM</p>
        ) : (
            <div class="new_mess">
                <form onSubmit={handleSubmit}>
                <input id="nouveaux_message"
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Écrivez quelque chose..."
                />
                <button type="submit">Ajouter</button>
                </form>
            </div>
        )}

        </div>
    );
    };
      



export default MainMessage