import { useGetThemeClass } from "../../../hooks/global.hooks.tsx";
import { FC } from "react";

import "./Avatar.styles.scss";
import { CustomButton } from "../ButtonComponents";
import cn from "classnames";

interface IProps {
  imagePath: string | null | undefined;
  first_name: string | undefined;
  last_name: string | undefined;
  handleFile?: (file: File) => void;
  size: 24 | 32 | 64 | 112;
}

const Avatar: FC<IProps> = ({
  imagePath,
  first_name,
  last_name,
  handleFile,
  size,
}) => {
  const themeClass = useGetThemeClass("b-avatar");

  const initials = `${first_name?.charAt(0) || ""}${
    last_name?.charAt(0) || ""
  }`;

  return (
    <div
      className={cn(themeClass, {
        ["-size_24"]: size === 24,
        ["-size_32"]: size === 32,
        ["-size_64"]: size === 64,
        ["-size_112"]: size === 112,
      })}
    >
      <div className={`${themeClass}_wrapper`}>
        {imagePath ? (
          <img
            src={imagePath}
            alt="Avatar image"
            className={`${themeClass}_image`}
          />
        ) : (
          <div className={`${themeClass}_initials`}>
            <span className={`${themeClass}_initials_text`}>{initials}</span>
          </div>
        )}
      </div>
      {handleFile && (
        <>
          <input
            accept="image/*"
            style={{ display: "none" }}
            id="raised-button-file"
            type="file"
            onChange={(e: any) => handleFile(e.target.files[0])}
          />
          <label htmlFor="raised-button-file">
            <CustomButton
              title={"Upload image"}
              size={"xs"}
              type={"text-plain"}
            />
          </label>
        </>
      )}
    </div>
  );
};
export default Avatar;
