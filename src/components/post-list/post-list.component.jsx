import { useEffect, useState } from 'react';
import { postService } from '../../service/postService';
import PostItem from '../post-item/post-item.component';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const res = await postService.fetchPosts();
      console.log(res);
      setPosts(res);
    }

    getPosts();
  }, []);

  return (
    <ul className="list">
      {
        posts && posts.map(({ id, title, userId, body }) => <PostItem key={id} title={title} username={userId} body={body} />)
      }
    </ul>
  )
}

export default PostList;