import PostList from '../../components/post-list/post-list.component';

import './homepage.styles.scss';

const HomePage = () => {

  return (
    <div className="homepage">
      <div className="homepage__title">
        <h1>
          <span>Welcome!</span>
          <span>Check the latest posts</span>
        </h1>
      </div>
      <main>
        <div className="homepage__content">
          <PostList />
        </div>
      </main>
    </div>
  );
}

export default HomePage;