import axios from "axios";

class UserApi {
    usersLink="https://jsonplaceholder.typicode.com/users";

  static async getInfo(apiLink) {
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