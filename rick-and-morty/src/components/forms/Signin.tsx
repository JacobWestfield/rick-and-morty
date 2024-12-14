import React, { FC } from "react";
import { Inputfield } from "../inputs/Inputfield.tsx";
import { Button } from "../buttons/Button.tsx";
import { useState, useRef } from "react";

interface SigninProps {
  onSubmit: () => void;
}

interface SigninData {
  email: string;
  password: string;
}

const defaultData: SigninData = {
  email: "",
  password: "",
};
export const Signin: FC<SigninProps> = ({ onSubmit }) => {
  const formRef: HTMLFormElement = useRef();
  const [formData, setFormData] = useState(defaultData);

  /**
   * Handles submit of form data (now without backend)
   * @param e {Event} Some Event on target input element
   */
  const handleSubmit = (e: Event): void => {
    e.preventDefault();
    for (let field in formData) {
      if (!formData[field]) {
        alert("All fields need to be filled");
        return;
      }
    }
    console.log(
      `Posted some data: User -> ${formData.email}${formData.password}`
    );
    onSubmit(formData);
    formRef.current.reset();
    setFormData(defaultData);
  };

  /**
   * Handles changes from input elements
   * @param e {Event} Some Event on target input element
   */
  const handleChange = (e: Event): void => {
    setFormData((prevState): SigninData => {
      return {
        ...prevState,
        [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement)
          .value,
      };
    });
  };

  return (
    <>
      <div className="form">
        <h3>Вход</h3>
        <form ref={formRef} onSubmit={handleSubmit} onChange={handleChange}>
          <Inputfield
            type="email"
            value={formData.email}
            name="email"
            variant="default"
            size="s-xl"
            radius="r-xl"
            error="Неверные данные"
            withAsterisk={true}
            label="Эл. Почта"
            description="Введите вашу почту"
          />
          <Inputfield
            type="password"
            value={formData.password}
            name="password"
            variant="default"
            size="s-xl"
            radius="r-xl"
            error="Неверные данные"
            withAsterisk={true}
            label="Пароль"
            description="Введите ваш пароль"
          />
          <Button type="submit" text="Войти" callback={() => {}} />
        </form>
      </div>
      <hr />
    </>
  );
};
