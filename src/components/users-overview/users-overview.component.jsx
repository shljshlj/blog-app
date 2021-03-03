import UserList from '../user-list/user-list.component';

const UsersOverview = ({ match }) => {
  return (
    <div className="users-overview">
      <div className="page-title">
        <h1>Users List</h1>
      </div>
      <main>
        <div className="users-container">
          <UserList path={match.path} />
        </div>
      </main>
    </div>
  );
}

export default UsersOverview;