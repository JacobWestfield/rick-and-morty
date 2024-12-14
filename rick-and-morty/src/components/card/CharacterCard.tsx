import React, { FC } from "react";
import { Link } from "react-router-dom";

interface cardProps {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  created: string;
}

export const CharacterCard: FC<cardProps> = (props) => {
  return (
    <>
      <Link className="card" to={`/characters/${props.id}`}>
        <img width="150" height="150" src={props.image} alt="characterPhoto" />
        <div className="card-info">
          <p>Name:{props.name}</p>
          <p>Status:{props.status}</p>
          <p>Species:{props.species}</p>
          <p>Type:{props.type}</p>
          <p>Gender:{props.gender}</p>
          <p>Created:{props.created}</p>
        </div>
      </Link>
    </>
  );
};
