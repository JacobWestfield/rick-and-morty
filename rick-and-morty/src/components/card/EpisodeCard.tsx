import React, { FC } from "react";
import { Link } from "react-router-dom";

interface cardProps {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  created: string;
}

export const EpisodeCard: FC<cardProps> = (props) => {
  return (
    <>
      <>
        <Link className="card" to={`/episodes/${props.id}`}>
          <div className="card-info">
            <p>Name: {props.name}</p>
            <p>Air Date: {props.air_date}</p>
            <p>Episode: {props.episode}</p>
            <p>Created: {props.created}</p>
          </div>
        </Link>
      </>
    </>
  );
};
