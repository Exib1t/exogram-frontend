import { IUser, IUserToken } from "../../../models/user/user.model.ts";
import { IErrorResponse } from "../../../models/error/error.model.ts";

export interface IUserSliceState {
  // User Data
  tokenData: IUserToken | null;
  userData: IUser | null;
  isUserDataLoading: boolean;
  // Access Token
  accessToken: string | null;
  isAccessTokenLoaded: boolean;
  isAccessTokenLoading: boolean;
  isAuthenticated: boolean;
  // Theme
  theme: "dark" | "light";
  // Errors
  errors: IErrorResponse | null;
}
