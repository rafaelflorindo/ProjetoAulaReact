import './estilo.css'

function Card(props){
    
    return (
        <div>
           <img src={props.fotoPerfil}/>
            <h1>{props.nome}</h1>
            <p>{props.biografia}</p>
        </div>
    )
}

export default Card;