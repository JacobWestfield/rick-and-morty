import React, { FC } from "react";
import "./Inputfield.css";

interface InputfieldProps {
  value: string;
  name: string;
  type: string;
  variant: string;
  size: string;
  radius: string;
  label: string;
  withAsterisk: boolean;
  description: string;
  error: string;
}

export const Inputfield: FC<InputfieldProps> = (props) => {
  const classNames = Object.values(props).join(" ");

  if (props.type === "radio") {
    return (
      <>
        <fieldset>
          <legend>Пол</legend>
          <label className="description">{props.description}</label>
          <>
            <input
              onChange={() => {}}
              type="radio"
              id="men"
              name="sex"
              value="men"
              className={`${classNames}`}
            />
            <label htmlFor="men">Муж.</label>
          </>

          <>
            <input
              onChange={() => {}}
              type="radio"
              id="woman"
              name="sex"
              value="woman"
              className={`${classNames}`}
            />
            <label htmlFor="woman">Жен.</label>
          </>
        </fieldset>
      </>
    );
  }
  return (
    <>
      <div>
        <label htmlFor={props.name}>
          {props.label} {props.withAsterisk && <span>*</span>}
        </label>
        <label className="description" htmlFor={props.name}>
          {props.description}
        </label>
        <input
          onChange={() => {}}
          type={props.type}
          name={props.name}
          value={props.value}
          className={`${classNames}`}
        />
      </div>
    </>
  );
};
