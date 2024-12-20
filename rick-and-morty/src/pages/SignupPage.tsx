import React, { FC } from "react";
import { Signup } from "../components/forms/Signup.tsx";

export const SignupPage: FC = () => {
  return (
    <>
      <h1>Sign Up</h1>
      <hr />
      <Signup />
      <hr />
    </>
  );
};
