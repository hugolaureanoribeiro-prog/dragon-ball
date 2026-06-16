import { useParams } from 'react-router-dom';
import dragonballs from '../Data/dragonballs';

function DragonBall() {
  const { id } = useParams();
  const dragonball = dragonballs.find(db => db.id === parseInt(id));

  if (!dragonball) return <h2>Dragon Ball não encontrado</h2>;

  return (
    <div className="DragonBall">
      <h1>{dragonball.nome}</h1>
      <img src={dragonball.imagem} alt={dragonball.nome} />
      <p>{dragonball.estagio}</p>

      {/* <h3>Transformações</h3>
      <ul>{dragonball.powers.map(p => <li key={p}>{p}</li>)}</ul>
      
      <h3>Transformações</h3>
      <ul>{dragonball.transformations.map(t => <li key={t}>{t}</li>)}</ul> */}
    </div>
  );
}

export default DragonBall;


// import {useParams} from 'react-router-dom';
// import dragonballs from '../Data/dragonballs';

// function DragonBall() {
//     const {dragonballId} = useParams();

//     const dragonball = dragonballs.find((dragonball) => dragonball.id === Number(dragonballId));
    
//     if (!dragonball) {
//         return <h1>Dragon Ball não encontrado</h1>;
//     }
    
//     return (
//         <>
//           <h1>{dragonball.nome}</h1>        
//         </>
//     )
// }

// export default DragonBall;