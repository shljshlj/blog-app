import PostList from '../../components/post-list/post-list.component';

import './homepage.styles.scss';

const HomePage = () => {

  return (
    <div className="homepage">
      <div className="homepage__title">
        <h1>Welcome!</h1>
        <h2>Check the latest posts</h2>
      </div>
      <main>
        <PostList />
      </main>
    </div>
  );
}

export default HomePage;