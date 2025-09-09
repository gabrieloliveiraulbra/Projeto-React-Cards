import React from "react";

type CardProps = {
  nome: string;
  curso: string;
  github: string;
};

export function Card({ nome, curso, github }: CardProps) {
  return (
    <div className="card">
      <h2>{nome}</h2>
      <p>{curso}</p>
      <a href={github} target="_blank" rel="noreferrer">
        Github
      </a>
    </div>
  );
}
