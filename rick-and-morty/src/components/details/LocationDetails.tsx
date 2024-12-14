import React, { FC } from "react";

interface cardProps {
  id: number;
  name: string;
  type: string;
  dimension: string;
  created: string;
}

export const LocationDetails: FC<cardProps> = (props) => {
  return (
    <>
      <div className="card-details">
        <p>Name:{props.name}</p>
        <p>Type:{props.type}</p>
        <p>Dimension:{props.dimension}</p>
        <p>Created:{props.created}</p>
      </div>
    </>
  );
};
