import { useGetThemeClass } from "../../../hooks/global.hooks.tsx";
import PageHeader from "../../common/PageHeader/PageHeader.tsx";
import TextInput from "../../controls/TextInput/TextInput.tsx";
import React, { useCallback, useEffect, useState } from "react";
import { IProfileStateModel } from "../../../models/pages/profile/profile.models.ts";
import { useAppDispatch, useAppSelector } from "../../../hooks/store.hooks.ts";
import { CustomButton } from "../../controls/ButtonComponents";
import {
  changeUserTheme,
  logoutUser,
  updateUser,
  uploadUserAvatar,
} from "../../../store/reducers/user/user.thunk.ts";
import { ValidationError } from "yup";
import { profileFormSchema } from "../../../validators/profile/profile.validators.ts";

import "./ProfilePage.styles.scss";
import Avatar from "../../controls/Avatar/Avatar.tsx";
import TokenIcon from "../../controls/TokenIcon/TokenIcon.tsx";
import ToggleSwitch from "../../controls/ToggleSwitch/ToggleSwitch.tsx";

const initialFields: IProfileStateModel["initialFields"] = {
  id: 0,
  first_name: "",
  last_name: "",
  username: "",
  avatar: null,
};

const errorFields: IProfileStateModel["errorFields"] = {
  first_name: "",
  last_name: "",
  username: "",
};

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const themeClass = useGetThemeClass("b-profilePage");

  const { userData, isUserDataLoading, theme } = useAppSelector(
    (state) => state.user,
  );

  const [errors, setErrors] =
    useState<IProfileStateModel["errorFields"]>(errorFields);
  const [canUpdate, setCanUpdate] = useState<boolean>(false);
  const [updatingData, setUpdatingData] =
    useState<IProfileStateModel["initialFields"]>(initialFields);

  const initFields = useCallback(() => {
    if (userData) {
      setUpdatingData({
        id: userData.id,
        first_name: userData.first_name,
        last_name: userData.last_name,
        username: userData.username,
        avatar: userData.avatar,
      });
    }
  }, [userData]);

  useEffect(() => {
    initFields();
  }, [initFields, userData]);

  useEffect(() => {
    if (updatingData && userData) {
      if (
        userData.first_name !== updatingData.first_name ||
        userData.last_name !== updatingData.last_name ||
        userData.username !== updatingData.username
      ) {
        setCanUpdate(true);
      } else {
        setCanUpdate(false);
      }
    }
  }, [updatingData, userData]);

  const handleChange =
    (name: keyof IProfileStateModel["initialFields"]) =>
    (value: string | number) => {
      setUpdatingData((prevState) => ({ ...prevState, [name]: value }));
    };

  const handleFile = async (file: File) => {
    if (userData) {
      dispatch(uploadUserAvatar({ userId: userData.id, file }));
    }
  };

  const handleSubmit = async (
    e: React.MouseEvent<HTMLDivElement, React.MouseEvent<Element, MouseEvent>>,
  ) => {
    e.preventDefault();

    setErrors(errorFields);

    try {
      await profileFormSchema.validate(updatingData, {
        abortEarly: false,
        strict: true,
      });

      dispatch(updateUser(updatingData));
    } catch (_validationErrors) {
      const validationErrors = _validationErrors as ValidationError;
      if (validationErrors && validationErrors.inner) {
        const errors: Record<string, string> = {};

        validationErrors.inner.forEach((error: ValidationError) => {
          if (error.path) {
            errors[error.path] = error.message;
          }
        });

        setErrors(errors as IProfileStateModel["errorFields"]);
      }
    }
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const handleChangeTheme = (data: boolean) => {
    dispatch(changeUserTheme(data ? "dark" : "light"));
  };

  return (
    <div className={themeClass}>
      <PageHeader
        title={"User profile"}
        renderRightContent={() => (
          <div>
            <CustomButton
              title={"Logout"}
              type={"tertiary"}
              size={"md"}
              clickHandler={handleLogout}
              icon={<TokenIcon iconName={"logout"} size={20} />}
              iconClass={`${themeClass}_logoutIcon`}
            />
          </div>
        )}
      />
      <div className={`${themeClass}_content`}>
        <div className={`${themeClass}_content_data`}>
          <div className={`${themeClass}_avatar`}>
            <Avatar
              imagePath={updatingData.avatar?.path}
              first_name={userData?.first_name}
              last_name={userData?.last_name}
              handleFile={handleFile}
              size={112}
            />
          </div>
          <div className={`${themeClass}_content_form`}>
            <TextInput
              customClassName={"-first_name"}
              value={updatingData.first_name}
              onChange={handleChange("first_name")}
              type={"on-bgd"}
              label={"First name"}
              error={errors.first_name}
            />
            <TextInput
              customClassName={"-last_name"}
              value={updatingData.last_name}
              onChange={handleChange("last_name")}
              type={"on-bgd"}
              label={"Last name"}
              error={errors.last_name}
            />
            <TextInput
              customClassName={"-username"}
              value={updatingData.username}
              onChange={handleChange("username")}
              type={"on-bgd"}
              label={"Username"}
              error={errors.username}
              disabled
            />
          </div>
        </div>
        <div className={`${themeClass}_divider`} />
        <div className={`${themeClass}_content_data`}>
          <div className={`${themeClass}_content_data_option`}>
            <h6 className={`${themeClass}_content_data_label`}>Theme</h6>
            <div className={`${themeClass}_themeSwitcher`}>
              <span>Light</span>
              <ToggleSwitch
                type={"switcher"}
                isSelectedToggle={theme === "dark"}
                handleSelect={(_, checked) => handleChangeTheme(checked)}
                disabled={false}
              />
              <span>Dark</span>
            </div>
          </div>
        </div>
      </div>
      <div className={`${themeClass}_footer`}>
        <CustomButton
          title={"Cancel"}
          type={"tertiary"}
          size={"md"}
          disabled={isUserDataLoading || !canUpdate}
          clickHandler={initFields}
        />
        <CustomButton
          title={"Update"}
          type={"primary"}
          size={"md"}
          disabled={isUserDataLoading || !canUpdate}
          clickHandler={handleSubmit}
        />
      </div>
    </div>
  );
};
export default ProfilePage;
