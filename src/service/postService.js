import { API_ENDPOINT } from '../shared/constants';
import { formatSentences } from '../shared/utils';

class PostService {
  fetchPosts = () => {
    const POSTS_API = `${API_ENDPOINT}/posts`;

    return fetch(POSTS_API)
      .then(response => response.json())
      .then(posts => {
        return posts.map(post => {
          const newPostTitle = formatSentences(post.title)[0].trim().slice(0, -1);
          console.log(newPostTitle);
          const newPostBody = formatSentences(post.body);
          return { ...post, title: newPostTitle, body: newPostBody }
        })
      })
  }
}

export const postService = new PostService();