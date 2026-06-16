import dragonballs from '../../Data/dragonballs'
import './DragonBallCard.css'

function DragonBallCard({nome, imagem, estagio, transformado, transformarDragonBall, id, listaDragonBalls, setListaDragonBalls, transformacao}){
  
  function definirAura(){

  if(nome.includes("Vegeta Super Saiyajin Blue")){
    return "aura-blue"
  }

  if(nome.includes("Vegeta Super Saiyajin God")){
    return "aura-god"
  }

  if(nome.includes("Vegeta Ultra Ego")){
    return "aura-ego"
  }

  if(nome.includes("Gohan Beast")){
    return "aura-beast"
  }

  if(nome.includes("Super Saiyajin Rose")){
    return "aura-rose"
  }

  if(nome.includes("Lendário Super Saiyajin")){
    return "aura-broly"
  }

  if(
  nome.includes("Vegeta Super Saiyajin") ||
  nome.includes("Vegeta Super Saiyajin 2") ||
  nome.includes("Vegeta Super Saiyajin 3") ||
  nome.includes("Gohan Super Saiyajin") ||
  nome.includes("Broly Super Saiyajin") ||
  nome.includes("Golden Freeza")
){
  return "aura-gold"
}

  if(nome.includes("Black Freeza")){
    return "aura-black"
  }

  return ""
}
  
  return ( 
         <div className='CardDragonBall'>
            
            <button onClick={transformarDragonBall}>
            <img 
            src={imagem} 
            alt={nome} title={nome}
            className={`dragonballImagem ${definirAura()}`}
            />
            </button>
            
            <div>
              
              <h2>{nome}</h2>
              <p>Estágio: {estagio}</p>
            </div>
            
          </div>
    )
}

export default DragonBallCard