import React, { FC } from "react";
import { Inputfield } from "../inputs/Inputfield.tsx";
import { Button } from "../buttons/Button.tsx";
import { useState, useRef } from "react";

interface SigninProps {
  onSubmit: () => void;
}

interface SignupData {
  name: string;
  nickname: string;
  email: string;
  sex: "men" | "woman";
  password: string;
  passwordRepeat: string;
}

const defaultData: SignupData = {
  name: "",
  nickname: "",
  email: "",
  sex: "men",
  password: "",
  passwordRepeat: "",
};

export const Signup: FC<SigninProps> = ({ onSubmit }) => {
  const formRef: HTMLFormElement = useRef();
  const [formData, setFormData] = useState<SignupData>(defaultData);

  console.log(formData);

  /**
   * Handles submit of form data (without backend)
   * @param e {Event} Change Event on target input element
   */
  const handleSubmit = (e: Event): void => {
    e.preventDefault();

    for (let field in formData) {
      if (!formData[field]) {
        alert("All fields need to be filled");
        return;
      }
    }
    if (formData.password !== formData.passwordRepeat) {
      alert("Passwords not match");
      return;
    }

    console.log(formData);
    //onSubmit(formData);
    formRef.current.reset();
    setFormData(defaultData);
  };

  /**
   * Handles changes from input elements
   * @param e {Event} Some Event on target input element
   */
  const handleChange = (e: Event): void => {
    setFormData((prevState): SignupData => {
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
        <h3>Регистрация</h3>
        <form ref={formRef} onSubmit={handleSubmit} onChange={handleChange}>
          <Inputfield
            type="text"
            value={formData.name}
            name="name"
            variant="default"
            size="s-xl"
            radius="r-xl"
            error="Неверные данные"
            withAsterisk={true}
            label="Имя"
            description="Введите ваше имя"
          />
          <Inputfield
            type="text"
            value={formData.nickname}
            name="nickname"
            variant="default"
            size="s-xl"
            radius="r-xl"
            error="Неверные данные"
            withAsterisk={true}
            label="Ник"
            description="Введите никнейм"
          />
          <Inputfield
            type="radio"
            value={formData.sex}
            name="sex"
            variant="default"
            size="s-xl"
            radius="r-xl"
            error="Неверные данные"
            withAsterisk={true}
            label="Пол"
            description="Выберите пол"
          />
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
            description="Придумайте пароль"
          />
          <Inputfield
            type="password"
            value={formData.passwordRepeat}
            name="passwordRepeat"
            variant="default"
            size="s-xl"
            radius="r-xl"
            error="Неверные данные"
            withAsterisk={true}
            label="Повторите пароль"
            description="Повторите пароль"
          />
          <Button type="submit" text="Регистрация" callback={() => {}} />
        </form>
      </div>
      <hr />
    </>
  );
};
