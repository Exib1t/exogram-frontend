import { Avatar } from "../user/user.model.ts";

export interface IFriend {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  avatar: Avatar | null;
}
