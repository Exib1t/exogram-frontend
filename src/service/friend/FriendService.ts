import api from "../api.ts";

class FriendService {
  public getAllFriends(userId: number) {
    return api.get(`friends/${userId}`);
  }
}

export default new FriendService();
