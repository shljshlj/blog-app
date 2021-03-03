import { formatSentences } from '../shared/utils';

class Post {
  constructor(id, userId, title, body, name, avatarUrl) {
    this.id = id;
    this.userId = userId;
    this.title = formatSentences(title)[0].trim().slice(0, -1);
    this.body = formatSentences(body);
    this.name = name;
    this.avatarUrl = avatarUrl;
  }
}

export default Post;