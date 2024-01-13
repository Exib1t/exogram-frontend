import { useGetThemeClass } from "../../../hooks/global.hooks.tsx";
import TextInput from "../../controls/TextInput/TextInput.tsx";
import React, { useEffect, useState } from "react";
import { CustomButton } from "../../controls/ButtonComponents";
import { ValidationError } from "yup";
import { useAppDispatch, useAppSelector } from "../../../hooks/store.hooks.ts";
import { userLogin } from "../../../store/reducers/user/user.thunk.ts";
import { LoginPageStateModel } from "../../../models/pages/login/login.models.ts";
import { loginFormSchema } from "../../../validators/login/login.validators.ts";

import "./LoginPage.styles.scss";

const initialFields = {
  username: "",
  password: "",
};

const LoginPage = () => {
  const dispatch = useAppDispatch();

  const { errors: authErrors } = useAppSelector((state) => state.user);

  const themeClass = useGetThemeClass("b-loginPage");

  const [errors, setErrors] =
    useState<LoginPageStateModel["loginData"]>(initialFields);
  const [loginData, setLoginData] =
    useState<LoginPageStateModel["loginData"]>(initialFields);

  useEffect(() => {
    if (authErrors && authErrors.errors.length) {
      authErrors.errors.forEach((err) => {
        setErrors((prevState) => ({ ...prevState, [err.field]: err.message }));
      });
    }
  }, [authErrors]);

  const handleChange =
    (name: keyof LoginPageStateModel["loginData"]) =>
    (value: string | number) => {
      setLoginData((prevState) => ({ ...prevState, [name]: value }));
    };

  const handleSubmit = async (
    e: React.MouseEvent<HTMLDivElement, React.MouseEvent<Element, MouseEvent>>,
  ): Promise<void> => {
    e.preventDefault();
    setErrors(initialFields);

    try {
      await loginFormSchema.validate(loginData, {
        abortEarly: false,
        strict: true,
      });

      dispatch(userLogin(loginData));
    } catch (_validationErrors) {
      const validationErrors = _validationErrors as ValidationError;
      if (validationErrors && validationErrors.inner) {
        const errors: Record<string, string> = {};

        validationErrors.inner.forEach((error: ValidationError) => {
          if (error.path) {
            errors[error.path] = error.message;
          }
        });

        setErrors(errors as LoginPageStateModel["loginData"]);
      }
    }
  };

  return (
    <div className={themeClass}>
      <div className={`${themeClass}_container`}>
        <h2 className={`${themeClass}_title`}>Sign in</h2>
        <form className={`${themeClass}_form`}>
          <div className={`${themeClass}_form_grid`}>
            <TextInput
              customClassName={`-username`}
              type={"on-bgd"}
              value={loginData.username}
              onChange={handleChange("username")}
              label={"Username"}
              error={errors.username}
            />
            <TextInput
              customClassName={`-password`}
              type={"on-bgd"}
              value={loginData.password}
              onChange={handleChange("password")}
              label={"Password"}
              error={errors.password}
              inputType={"password"}
            />
          </div>

          <CustomButton
            size={"md"}
            type={"primary"}
            title={"Login"}
            clickHandler={handleSubmit}
            fullWidth
          />
        </form>
      </div>
    </div>
  );
};
export default LoginPage;
