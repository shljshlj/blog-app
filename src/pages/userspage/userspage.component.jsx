// import React from 'react';

import { Route } from 'react-router-dom';
import UsersOverview from '../../components/users-overview/users-overview.component';
import UserPage from '../userpage/userpage.component';

// import './userspage.styles.scss';

const UsersPage = ({ match }) => {
  return (
    <div className="users-page">
      <Route exact path={`${match.path}`} component={UsersOverview} />
      <Route path={`${match.path}/:userId`} component={UserPage} />
    </div>
  );
}

export default UsersPage;