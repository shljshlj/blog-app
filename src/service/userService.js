import { API_ENDPOINT } from '../shared/constants';
// import { formatSentences } from '../shared/utils';
import User from '../models/User';

class UserService {
  fetchUsers = () => {
    const USERS_API = `${API_ENDPOINT}/users`;

    return fetch(USERS_API)
      .then(response => response.json())
      .then(data => {
        const userPreviews = data.map(userData => {
          const { id, name, username, address, company } = userData;
          const user = new User(id, name, username, address, company);
          const avatarSVG = user.getAvatarCode();
          return { ...user.getUserPreview(), avatarSVG };
        });
        console.log(userPreviews)
        return userPreviews;
      });
  }
}

export const userService = new UserService();