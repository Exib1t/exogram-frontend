export interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  avatar: Avatar | null;
  // status: UserStatusModel;
  friendIds: number[];
}

export interface IUserToken {
  id: number;
  username: string;
}

export interface IUserCreate {
  first_name: string;
  last_name: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export interface IUserCreateResponse {
  token: string;
}

export interface IUserLogin {
  username: string;
  password: string;
}

export interface IUserLoginResponse {
  token: string;
}

export interface IUserRefreshResponse {
  id: number;
  username: string;
}

export interface IUserUpdate {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  avatar: Avatar | null;
}

export interface Avatar {
  userId: number;
  path: string;
  filename: string;
  originalname: string;
  mimetype: string;
  size: number;
}

export interface IUploadAvatar {
  userId: number;
  file: File;
}

export type UserStatusModel = "offline" | "online";
