import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import UserPage from './pages/userpage/userpage.component';
import UsersPage from './pages/userspage/userspage.component';

function App() {
  return (
    <div>
      <h1>Blog App</h1>

      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/users/:userId' component={UserPage} />
        <Route path='/users' component={UsersPage} />
      </Switch>
    </div>
  );
}

export default App;
