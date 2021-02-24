import { useEffect, useState } from 'react';
import { postService } from '../../service/postService';
import Pagination from '../pagination/pagination.component';
import PostItem from '../post-item/post-item.component';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [totalPosts, setTotalPosts] = useState(0);

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      const { formatedPosts, count } = await postService.fetchPosts();
      setPosts(formatedPosts);
      setTotalPosts(count);
      setLoading(false);
    }

    getPosts();
  }, []);

  // Get currentPage posts from an array of posts
  const endPostIndex = currentPage * postsPerPage; // zero-based index before which to end extraction // 1 * 10  = 10
  const startPostIndex = endPostIndex - postsPerPage; // zero-based index at which to start extraction // 10 - 10 = 0
  const currentPosts = posts.slice(startPostIndex, endPostIndex) // slice(0, 10) -> [0, 1, 2, ... 9]

  const paginate = pageNumber => setCurrentPage(pageNumber);


  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <ul className="list">
        {
          currentPosts && currentPosts.map(({ id, title, userId, body }) => <PostItem key={id} title={title} username={userId} body={body} />)
        }
      </ul>
      <Pagination totalPosts={totalPosts} postsPerPage={postsPerPage} paginate={paginate} currentPage={currentPage} />
    </>
  );
}

export default PostList;