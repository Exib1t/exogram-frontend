import {
  IUserCreate,
  IUserLogin,
  IUserUpdate,
} from "../../models/user/user.model.ts";
import api from "../api.ts";

class UserService {
  public createUser(bodyParams: IUserCreate) {
    return api.post("/users/create", bodyParams);
  }

  public loginUser(bodyParams: IUserLogin) {
    return api.post("/users/login", bodyParams);
  }

  public refreshUser() {
    return api.get("/users/refresh");
  }

  public getUserData(id: number) {
    return api.get(`/users/${id}`);
  }

  public updateUser(bodyParams: IUserUpdate) {
    return api.patch(`/users/${bodyParams.id}`, bodyParams);
  }

  public uploadUserAvatar(userId: number, file: File) {
    const data = new FormData();
    data.append("image", file);

    return api.post(`avatars/${userId}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
}

export default new UserService();
