import { API_ENDPOINT } from '../shared/constants';
// import { formatSentences } from '../shared/utils';
import User from '../models/User';

class UserService {
  fetchUsers() {
    const USERS_ENDPOINT = `${API_ENDPOINT}/users`;

    return fetch(USERS_ENDPOINT)
      .then(response => response.json())
      .then(data => {
        const userPreviews = data.map(userData => {
          const { id, name, username, address, company } = userData;
          const user = new User(id, name, username, address, company);
          const avatarSVG = user.getAvatarCode();
          return { ...user.getUserPreview(), avatarSVG };
        });

        return userPreviews;
      });
  }

  fetchSingleUser(userId) {
    const USER_ENDPOINT = `${API_ENDPOINT}/users/${userId}`;

    return fetch(USER_ENDPOINT)
      .then(response => response.json())
      .then(({ id, name, username, address, company, email, phone, website }) => {
        return new User(id, name, username, address, company, email, phone, website)
      });
  }
}

export const userService = new UserService();