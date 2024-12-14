import React, { FC } from "react";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  categoryName: string;
  url: string;
  image: string;
}

export const CategoryCard: FC<CategoryCardProps> = ({
  image,
  categoryName,
  url,
}) => {
  return (
    <>
      <Link className="category-card" to={url}>
        <img width="150" height="150" src={image} alt="characterPhoto" />
        {categoryName}
      </Link>
    </>
  );
};
