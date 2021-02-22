import { useEffect, useState } from 'react';
import { postService } from '../../service/postService';
import PostItem from '../post-item/post-item.component';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      const res = await postService.fetchPosts();
      setPosts(res);
      setLoading(false);
    }

    getPosts();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className="list">
      {
        posts && posts.map(({ id, title, userId, body }) => <PostItem key={id} title={title} username={userId} body={body} />)
      }
    </ul>
  )
}

export default PostList;