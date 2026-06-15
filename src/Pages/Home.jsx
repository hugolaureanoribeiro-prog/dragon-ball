import { useEffect, useState, useCallback } from 'react';
import DragonBallCard from '../Components/DragonBallCard/DragonBallCard';
import dragonballs from "../Data/dragonballs";   // ← Certifique-se que o caminho está correto

function Home() {
  // Inicializa apenas com os personagens base (estágio 0)
  const initialDragonBalls = dragonballs.filter((db) => db.estagio === 0);

  const [listaDragonBalls, setListaDragonBalls] = useState(initialDragonBalls);
  const [qtdTransformados, setQtdTransformados] = useState(0);

  // Conta quantos já foram transformados
  useEffect(() => {
    const transformados = listaDragonBalls.filter(db => db.estagio > 0);
    setQtdTransformados(transformados.length);
  }, [listaDragonBalls]);

  const transformarDragonBall = useCallback((nomeDragonBall) => {
    setListaDragonBalls(prevLista =>
      prevLista.map(dragonball => {
        if (dragonball.nome !== nomeDragonBall) return dragonball;

        const proximaNome = dragonball.transformacao;
        if (!proximaNome) return dragonball; // já está na forma final

        const evolucao = dragonballs.find(db => db.nome === proximaNome);
        if (!evolucao) return dragonball;

        return {
          ...dragonball,                    // mantém id e outras propriedades
          nome: evolucao.nome,
          estagio: dragonball.estagio + 1,
          imagem: evolucao.imagem,
          transformacao: evolucao.transformacao,   // ← ESSA LINHA ESTAVA FALTANDO!
          transformado: true
        };
      })
    );
  }, []);

  return (
    <>
      <h1>Melhores personagens de Dragon Ball</h1>
      
      <h2>Guerreiros Transformados: {qtdTransformados}</h2>

      <p>Clique nos cards para transforma-los!</p>

      <section id="center">
        {listaDragonBalls.map((dragonball) => (
          <DragonBallCard
            key={dragonball.id}                    // melhor usar o id
            nome={dragonball.nome}
            estagio={dragonball.estagio}
            imagem={dragonball.imagem}
            transformado={dragonball.transformado}
            transformarDragonBall={() => transformarDragonBall(dragonball.nome)}
          />
        ))}
      </section>
    </>
  );
}

export default Home;