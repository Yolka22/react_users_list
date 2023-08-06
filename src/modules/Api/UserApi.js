import axios from "axios";

class UserApi {
  static async getUsers(apiLink) {
    try {
      const response = await axios.get(apiLink);
      return response.data;
    } catch (error) {
      console.error("Error fetching users:", error);
      return [];
    }
  }
}

export default UserApi;