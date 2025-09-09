import React from "react";
import "./App.css";
import { Card } from "./components/Card";

function App() {
  // Primeiro card = suas informações
  const cards = [
    {
      nome: "Gabriel Alves de Oliveira",
      curso: "Engenharia de Software",
      github: "https://github.com/gabrieloliveiraulbra"
    },
    {
      nome: "Fulano de Tal",
      curso: "Engenharia de Software",
      github: "https://github.com/fulano"
    },
    {
      nome: "Maria da Silva",
      curso: "Ciência da Computação",
      github: "https://github.com/maria"
    },
    {
      nome: "Pedro Santos",
      curso: "Sistemas de Informação",
      github: "https://github.com/pedro"
    }
  ];

  // Ordenar alfabeticamente os cards (exceto o primeiro)
  const [meuCard, ...outros] = cards;
  const ordenados = [meuCard, ...outros.sort((a, b) => a.nome.localeCompare(b.nome))];

  return (
    <div className="cards-container">
      {ordenados.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
}

export default App;
