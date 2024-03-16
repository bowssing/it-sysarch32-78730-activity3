import { useEffect, useState } from "react"
import Pokemon from "./Pokemon";

function Pokedex(){

    const [list, setList] = useState([]);
    const [language, setLanguage] = useState('english');

    useEffect(() => {
        fetch('https://us-central1-it-sysarch32.cloudfunctions.net/pokemon')
        .then(response => response.json())
        .then(data => {
            setList(data);
        });
    })

    const handleChangeLanguage = (lang) => {
        setLanguage(lang);
    };
return(
    
    <div className="pokedex">
    <div className="buttons">
        <button className="button" onClick={() => handleChangeLanguage('english')}>English</button>
        <button className="button" onClick={() => handleChangeLanguage('japanese')}>Japanese</button>
        <button className="button" onClick={() => handleChangeLanguage('chinese')}>Chinese</button>
        <button className="button" onClick={() => handleChangeLanguage('french')}>French</button>
    </div>
    <div>
        {list.map((pokemon, index) => {
          return(
          <Pokemon key={index} pokemon={pokemon} language={language}/>


          );
        })}
      </div>
    </div>
)
}

export default Pokedex
