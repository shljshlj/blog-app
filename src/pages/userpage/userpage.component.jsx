import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { userService } from '../../service/userService';

import { InfoSection, InfoSectionRow } from '../../components/user-info/user-info.component';
import PostList from '../../components/post-list/post-list.component';

import './userpage.styles.scss';

const UserPage = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      setLoading(true);
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
  } else if (!loading && user) {
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
            <InfoSection title='About'>
              {user.getShortInfo().map(info => <InfoSectionRow key={info.infoType} info={info} />)}
            </InfoSection>
          </div>

          <div className="user-content__main">
            <InfoSection title='Posts' />

            <PostList userId={userId} />
          </div>
        </div>

      </div>
    );
  }

  return null;
}

export default UserPage;