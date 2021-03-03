import { useEffect, useState } from 'react';
import { userService } from '../../service/userService';
import UserItem from '../user-item/user-item.component';

import './user-list.styles.scss';

const UserList = ({ path }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      const userPreviews = await userService.fetchUsers();
      setUsers(userPreviews);
      setLoading(false);
    }

    getUsers();
  }, []);

  if (loading) {
    return (
      <h2>Loading...</h2>
    )
  }

  return (
    <ul className="user-list">
      {users && users.map(user => {
        return <UserItem key={user.id} user={user} path={path} />
      })}
    </ul>
  )
}

export default UserList;