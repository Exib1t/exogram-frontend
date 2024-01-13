import { useGetThemeClass } from "../../../hooks/global.hooks.tsx";
import TextInput from "../../controls/TextInput/TextInput.tsx";
import React, { useEffect, useState } from "react";
import { CustomButton } from "../../controls/ButtonComponents";
import { RegisterPageStateModel } from "../../../models/pages/register/register.models.ts";
import { registerFormSchema } from "../../../validators/register/register.validators.ts";
import { ValidationError } from "yup";
import { useAppDispatch, useAppSelector } from "../../../hooks/store.hooks.ts";
import { userCreate } from "../../../store/reducers/user/user.thunk.ts";

import "./RegisterPage.styles.scss";

const initialFields = {
  first_name: "",
  last_name: "",
  username: "",
  password: "",
  confirmPassword: "",
};

const RegisterPage = () => {
  const dispatch = useAppDispatch();

  const { errors: authErrors } = useAppSelector((state) => state.user);

  const themeClass = useGetThemeClass("b-registerPage");

  const [errors, setErrors] =
    useState<RegisterPageStateModel["createData"]>(initialFields);
  const [createData, setCreateData] =
    useState<RegisterPageStateModel["createData"]>(initialFields);

  useEffect(() => {
    if (authErrors && authErrors.errors.length) {
      authErrors.errors.forEach((err) => {
        setErrors((prevState) => ({ ...prevState, [err.field]: err.message }));
      });
    }
  }, [authErrors]);

  const handleChange =
    (name: keyof RegisterPageStateModel["createData"]) =>
    (value: string | number) => {
      setCreateData((prevState) => ({ ...prevState, [name]: value }));
    };

  const handleSubmit = async (
    e: React.MouseEvent<HTMLDivElement, React.MouseEvent<Element, MouseEvent>>,
  ): Promise<void> => {
    e.preventDefault();
    setErrors(initialFields);

    try {
      await registerFormSchema.validate(createData, {
        abortEarly: false,
        strict: true,
      });

      dispatch(userCreate(createData));
    } catch (_validationErrors) {
      const validationErrors = _validationErrors as ValidationError;
      if (validationErrors && validationErrors.inner) {
        const errors: Record<string, string> = {};

        validationErrors.inner.forEach((error: ValidationError) => {
          if (error.path) {
            errors[error.path] = error.message;
          }
        });

        setErrors(errors as RegisterPageStateModel["createData"]);
      }
    }
  };

  return (
    <div className={themeClass}>
      <div className={`${themeClass}_container`}>
        <h2 className={`${themeClass}_title`}>Sign up</h2>
        <form className={`${themeClass}_form`}>
          <div className={`${themeClass}_form_grid`}>
            <TextInput
              customClassName={`-first_name`}
              type={"on-bgd"}
              value={createData.first_name}
              onChange={handleChange("first_name")}
              label={"First name"}
              error={errors.first_name}
            />
            <TextInput
              customClassName={`-last_name`}
              type={"on-bgd"}
              value={createData.last_name}
              onChange={handleChange("last_name")}
              label={"Last name"}
              error={errors.last_name}
            />
            <TextInput
              customClassName={`-username`}
              type={"on-bgd"}
              value={createData.username}
              onChange={handleChange("username")}
              label={"Username"}
              error={errors.username}
            />
            <TextInput
              customClassName={`-password`}
              type={"on-bgd"}
              value={createData.password}
              onChange={handleChange("password")}
              label={"Password"}
              error={errors.password}
              inputType={"password"}
            />
            <TextInput
              customClassName={`-confirm`}
              type={"on-bgd"}
              value={createData.confirmPassword}
              onChange={handleChange("confirmPassword")}
              label={"Confirm password"}
              error={errors.confirmPassword}
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
export default RegisterPage;
