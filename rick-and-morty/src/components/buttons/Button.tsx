import React, { FC } from "react";

interface ButtonProps {
  text: string;
  type: string;
  callback: () => void;
}

export const Button: FC<ButtonProps> = ({ text, type, callback }) => {
  return (
    <button className="btn-common" type={type} onClick={callback}>
      {text}
    </button>
  );
};
