import { useState, useEffect } from 'react';
import PostList from '../../components/post-list/post-list.component';
// import UserPosts from '../../components/user-posts/user-posts.component';
import { userService } from '../../service/userService';

import './userpage.styles.scss';

const UserPage = ({ match }) => {
  const userId = match.params.userId;

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      const user = await userService.fetchSingleUser(userId);
      setUser(user);
      setLoading(false);
    }

    getUser();
  }, [userId]);

  if (loading) {
    return (
      <h2>Loading...</h2>
    );
  }

  console.log(user)

  return (
    <div className="user-page">
      <div className="user-header">
        <div className="user-header__avatar">
          <img src={user.getAvatarCode()} alt={`${user.name}' avatar`} />
        </div>
        <div className="user-header__title">
          <h1>{user.name}</h1>
          <span>{user.username}</span>
        </div>
      </div>

      <div className="user-content">
        <div className="user-content__aside">
          <div className="user-info"></div>
          <div className="user-company"></div>
        </div>
        <div className="user-content__main">
          <PostList userId={userId} />
        </div>
      </div>

    </div>
  )
}

export default UserPage;