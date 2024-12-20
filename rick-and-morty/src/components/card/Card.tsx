import React, { FC } from "react";
import { CharacterCard } from "./CharacterCard.tsx";
import { EpisodeCard } from "./EpisodeCard.tsx";
import { LocationCard } from "./LocationCard.tsx";

interface CardProps {
  type: string;
  data: JSON;
}

export const Card: FC<CardProps> = ({ type, data }) => {
  if (type === "Characters") {
    return (
      <>
        <>
          <CharacterCard {...data} />
        </>
      </>
    );
  }
  if (type === "Locations") {
    return (
      <>
        <>
          <LocationCard {...data} />
        </>
      </>
    );
  }
  if (type === "Episodes") {
    return (
      <>
        <>
          <EpisodeCard {...data} />
        </>
      </>
    );
  }

  return <>Loading...</>;
};
