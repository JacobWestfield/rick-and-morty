import React, { FC } from "react";

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

export const CharacterDetails: FC<cardProps> = (props) => {
  return (
    <>
      <img width="500" height="500" src={props.image} alt="characterPhoto" />
      <div className="card-details">
        <p>Name:{props.name}</p>
        <p>Status:{props.status}</p>
        <p>Species:{props.species}</p>
        <p>Type:{props.type}</p>
        <p>Gender:{props.gender}</p>
        <p>Created:{props.created}</p>
      </div>
    </>
  );
};
