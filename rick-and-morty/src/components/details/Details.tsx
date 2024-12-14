import React, { FC, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import mockDataCharacters from "../../assets/characters.json";
import mockDataEpisodes from "../../assets/episode.json";
import mockDataLocations from "../../assets/location.json";
import { CharacterDetails } from "./CharacterDetails.tsx";
import { LocationDetails } from "./LocationDetails.tsx";
import { EpisodeDetails } from "./EpisodeDetails.tsx";
import { useNavigate } from "react-router-dom";

export const Details: FC = () => {
  const { categoryName, cardId } = useParams<string>();
  const [currentCategory, setCurrentCategory] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    if (categoryName === "characters") {
      setCurrentCategory("Characters");
    } else if (categoryName === "locations") {
      setCurrentCategory("Locations");
    } else if (categoryName === "episodes") {
      setCurrentCategory("Episodes");
    } else {
      navigate("/notfound");
    }
    if (
      isNaN(Number(cardId) - 1) ||
      !mockDataCharacters.at(Number(cardId) - 1) ||
      !mockDataLocations.at(Number(cardId) - 1) ||
      !mockDataEpisodes.at(Number(cardId) - 1)
    )
      navigate("/notfound");
  }, []);

  if (currentCategory === "Characters") {
    return (
      <>
        <>
          {cardId && (
            <CharacterDetails {...mockDataCharacters.at(Number(cardId) - 1)} />
          )}
        </>
      </>
    );
  }

  if (currentCategory === "Locations") {
    return (
      <>
        <>
          {cardId && (
            <LocationDetails {...mockDataLocations.at(Number(cardId) - 1)} />
          )}
        </>
      </>
    );
  }

  if (currentCategory === "Episodes") {
    return (
      <>
        <>
          {cardId && (
            <EpisodeDetails {...mockDataEpisodes.at(Number(cardId) - 1)} />
          )}
        </>
      </>
    );
  }

  return <>Loading...</>;
};
