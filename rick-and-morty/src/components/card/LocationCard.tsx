import React, { FC } from "react";
import { Link } from "react-router-dom";

interface cardProps {
  id: number;
  name: string;
  type: string;
  dimension: string;
  created: string;
}

export const LocationCard: FC<cardProps> = (props) => {
  return (
    <>
      <>
        <Link className="card" to={`/locations/${props.id}`}>
          <div className="card-info">
            <p>Name:{props.name}</p>
            <p>Type:{props.type}</p>
            <p>Dimension:{props.dimension}</p>
            <p>Created:{props.created}</p>
          </div>
        </Link>
      </>
    </>
  );
};
