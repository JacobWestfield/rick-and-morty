import React, { FC } from "react";
import { Signin } from "../components/forms/Signin.tsx";

export const SigninPage: FC = () => {
  return (
    <>
      <h1>Sign In</h1>
      <hr />
      <Signin />
      <hr />
    </>
  );
};
