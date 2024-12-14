import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Mainpage } from "./pages/MainpagePage.tsx";
import { CategoryPage } from "./pages/CategoryPage.tsx";
import { Navbar } from "./components/navbar/Navbar.tsx";
import { SigninPage } from "./pages/SigninPage.tsx";
import { SignupPage } from "./pages/SignupPage.tsx";
import { internalPaths } from "./RouterPaths/index.ts";
import { navBarTabs } from "./navbar-tabs/index.ts";
import { Details } from "./components/details/Details.tsx";
import { NotFoundPage } from "./pages/NotFoundPage.tsx";

function App() {
  return (
    <>
      <Navbar tabs={navBarTabs} />
      <hr />
      <Routes>
        <Route path={internalPaths.home} element={<Mainpage />} />
        {internalPaths.categories.map((c: string) => (
          <Route
            path={c}
            element={<CategoryPage categoryName={c} />}
          /> /* Не могу тут задать аттрибут key, в данном тэге не работает */
        ))}
        <Route path={internalPaths.details} element={<Details />} />
        <Route path={internalPaths.signin} element={<SigninPage />} />
        <Route path={internalPaths.signup} element={<SignupPage />} />
        <Route path={internalPaths.notFound} element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
