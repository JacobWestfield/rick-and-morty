import React, { FC, useState, useEffect } from "react";
import { Card } from "../components/card/Card.tsx";
import mockDataCharacters from "../assets/characters.json";
import mockDataEpisodes from "../assets/episode.json";
import mockDataLocations from "../assets/location.json";
import { useNavigate } from "react-router-dom";

interface CategoryPageProps {
  categoryName: string;
}

export const CategoryPage: FC<CategoryPageProps> = ({ categoryName }) => {
  const [category, setCategory] = useState([]);
  const [currentCategory, setCurrentCategory] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    if (categoryName === "/characters") {
      setCategory(mockDataCharacters);
      setCurrentCategory("Characters");
    } else if (categoryName === "/locations") {
      setCategory(mockDataLocations);
      setCurrentCategory("Locations");
    } else if (categoryName === "/episodes") {
      setCategory(mockDataEpisodes);
      setCurrentCategory("Episodes");
    } else {
      navigate("/notfound");
    }
  }, [categoryName]);

  if (category.length === 0) {
    return <>Loading...</>;
  }

  return (
    <>
      <h1>Category: {currentCategory}</h1>
      <hr />
      <div className="category-card-container">
        {category.map((c) => {
          return <Card key={c.id} type={currentCategory} data={c} />;
        })}
      </div>
    </>
  );
};
