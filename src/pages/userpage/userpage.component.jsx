import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PostList from '../../components/post-list/post-list.component';
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
          <img src={user.getAvatarUrl()} alt={`${user.name}' avatar`} />
        </div>
        <div className="user-header__title">
          <h1>{user.name}</h1>
          <span>{user.username}</span>
        </div>
      </div>

      <div className="user-content">
        <div className="user-content__aside">

          <div className="user-section user-section--info">
            <div className="user-section__title">
              <h2>Info</h2>
              <div className="user-section--info__email">
                <div className="icon--email">
                  <span>Icon</span>
                </div>
                <div>
                  {user.email}
                </div>
              </div>
              <div className="user-section--info__website">
                <div className="icon--website">
                  <span>Icon</span>
                </div>
                <div>
                  <a href={"http://" + user.website} rel="noreferrer noopener">{user.website}</a>
                  {/* <Link to={{ pathname: "http://" + user.website }} target="_blank">{user.website}</Link> */}
                </div>
              </div>
              <div className="user-section--info__phone">
                <div className="icon--phone">
                  <span>Icon</span>
                </div>
                <div>
                  {user.phone}
                </div>
              </div>
            </div>
          </div>

          <div className="user-section user-section--company">
            <div className="user-section__title">
              <h2>Company</h2>
            </div>
          </div>
        </div>

        <div className="user-content__main">
          <div className="user-section user-section--posts">
            <div className="user-section__title ">
              <h2>Posts</h2>
            </div>
          </div>
          <PostList userId={userId} />
        </div>
      </div>

    </div>
  )
}

export default UserPage;