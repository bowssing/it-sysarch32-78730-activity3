
function Pokemon ({ pokemon, language }) {
    
    const { id, name, type, base, image } = pokemon;

    const getNameByLanguage = () => {
        switch (language) {
          case 'english':
            return name.english;
          case 'japanese':
            return name.japanese;
          case 'chinese':
            return name.chinese;
          case 'french':
            return name.french;
          default:
            return name.english;
        }
      };

    return (
        <div className="pokemon">
            <img className="image" src={image}/>
            <h1 className="title">[#{id}] {getNameByLanguage()}</h1>
            <h2 className="type">{type.join(', ')}</h2>

            <div className="base">
            <ul>
                <li>HP: {base.HP}</li>
                <li>Speed: {base.Speed}</li>
                <li>Attk: {base.Attack}</li>
                <li>Sp. Attk: {base['Sp. Attack']}</li>
                <li>Def: {base.Defense}</li>
                <li>Sp. Def: {base['Sp. Defense']}</li>
            </ul>
            </div>
        </div>
    )
}

export default Pokemon;