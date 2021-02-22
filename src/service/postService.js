import { API_ENDPOINT } from '../shared/constants';

class PostService {
  fetchPosts = () => {
    const POSTS_API = `${API_ENDPOINT}/posts`;

    return fetch(POSTS_API)
      .then(response => response.json())
  }
}

export const postService = new PostService();