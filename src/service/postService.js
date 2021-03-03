import { API_ENDPOINT } from '../shared/constants';
import User from '../models/User';
import Post from '../models/Post';

const ENDPOINTS = (userId = null) => ({
  ALL_POSTS: `${API_ENDPOINT}/posts`,
  USER_POSTS: `${API_ENDPOINT}/users/${userId}/posts`
});

const USER_ENDPOINT = (userId) => `${API_ENDPOINT}/users/${userId}`;

class PostService {
  async fetchPosts(userId = null) {
    const endpoint = userId ? ENDPOINTS(userId)['USER_POSTS'] : ENDPOINTS()['ALL_POSTS'];

    const response = await fetch(endpoint);
    const data = await response.json();
    const count = data.length;

    const userIds = data.reduce((acc, currentPost) => {
      if (!acc.some(userId => userId === currentPost.userId)) {
        acc.push(currentPost.userId)
      }
      return acc;
    }, []);

    const usersResponse = await Promise.all([...userIds.map(userId => fetch(USER_ENDPOINT(userId)))]);
    const users = await Promise.all([...usersResponse.map(response => response.json())]);

    const posts = data.map(({ id, userId, title, body }) => {
      const user = users.filter(user => user.id === userId)[0];
      const userObj = new User(user.id, user.name, user.username);

      return new Post(id, userId, title, body, user.name, userObj.getAvatarUrl());
    });

    return { posts, count };
  }
}

export const postService = new PostService();