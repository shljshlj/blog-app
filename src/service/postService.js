import { API_ENDPOINT } from '../shared/constants';
import { formatSentences } from '../shared/utils';

const ENDPOINTS = (userId = null) => ({
  ALL_POSTS: `${API_ENDPOINT}/posts`,
  USER_POSTS: `${API_ENDPOINT}/users/${userId}/posts`
});

class PostService {
  fetchPosts(userId = null) {
    const endpoint = userId ? ENDPOINTS(userId)['USER_POSTS'] : ENDPOINTS()['ALL_POSTS'];

    return fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        const count = data.length;
        const formatedPosts = data.map(post => {
          const newPostTitle = formatSentences(post.title)[0].trim().slice(0, -1);
          const newPostBody = formatSentences(post.body);
          return { ...post, title: newPostTitle, body: newPostBody }
        });

        return { formatedPosts, count }
      })
  }
}

export const postService = new PostService();