import React, { FC } from "react";
import { NavLink } from "react-router-dom";

interface Tabs {
  name: string;
  url: string;
}

export const Navbar: FC<Tabs[]> = ({ tabs }) => {
  return (
    <ul>
      {tabs.map((tab): Tabs => {
        return (
          <li key={tab.url}>
            <NavLink className="nav-link" to={tab.url}>
              {tab.name}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};
