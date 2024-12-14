import React, { FC } from "react";
import { CategoryCard } from "../components/category-card/CategoryCard.tsx";
import { Categories } from "../categories.ts";

export const Mainpage: FC = () => {
  return (
    <>
      <h1>Main page</h1>
      <hr />
      <h2>Welcome!</h2>
      <hr />
      <div className="category-card-container">
        {Categories.map((c) => {
          return (
            <CategoryCard
              key={c.categoryName}
              image={c.image}
              categoryName={c.categoryName}
              url={c.url}
            />
          );
        })}
      </div>
    </>
  );
};
