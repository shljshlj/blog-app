import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import AboutPage from './pages/aboutpage/aboutpage.component';
import HomePage from './pages/homepage/homepage.component';
import PostPage from './pages/postpage/postpage.component';
// import UserPage from './pages/userpage/userpage.component';
import UsersPage from './pages/userspage/userspage.component';

function App() {
  return (
    <div className="page-container">
      <Header />
      <div className="page-content">
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/post/:postId' component={PostPage} />
          <Route path='/users' component={UsersPage} />
          <Route path='/about' component={AboutPage} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
