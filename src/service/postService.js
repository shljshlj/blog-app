import { API_ENDPOINT } from '../shared/constants';
import { formatSentences } from '../shared/utils';

class PostService {
  fetchPosts = () => {
    const POSTS_API = `${API_ENDPOINT}/posts`;

    return fetch(POSTS_API)
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