import { IFriend } from "../../../models/friend/friend.model.ts";
import { IErrorResponse } from "../../../models/error/error.model.ts";

export interface IFriendsState {
  friends: IFriendsResponse;
  isFriendsLoading: boolean;
  errors: IErrorResponse | null;
}

export interface IFriendsResponse {
  added: IFriend[];
  not_added: IFriend[];
}
