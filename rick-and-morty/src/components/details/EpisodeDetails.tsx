import React, { FC } from "react";

interface cardProps {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  created: string;
}

export const EpisodeDetails: FC<cardProps> = (props) => {
  return (
    <>
      <div className="card-details">
        <p>Name: {props.name}</p>
        <p>Air Date: {props.air_date}</p>
        <p>Episode: {props.episode}</p>
        <p>Created: {props.created}</p>
      </div>
    </>
  );
};
