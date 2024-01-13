import { Avatar } from "../../user/user.model.ts";

export interface IProfileStateModel {
  initialFields: {
    id: number;
    first_name: string;
    last_name: string;
    username: string;
    avatar: Avatar | null;
  };
  errorFields: {
    first_name: string;
    last_name: string;
    username: string;
  };
}
