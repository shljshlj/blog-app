import { Link } from 'react-router-dom';

import './post-item.styles.scss';

const PostItem = ({ post: { userId, name, title, body, avatarUrl } }) => {
  return (
    <li className="post-item">
      <header className="post-item__header">
        <Link to={`/users/${userId}`}>
          <div className="post-item__avatar">
            <img src={avatarUrl} alt={`${name}'s avatar`} />
          </div>
        </Link>

        <div className="post-item__meta">
          <h3>
            <Link to={`/users/${userId}`}>
              {name}
            </Link>
          </h3>
          <span>Timestamp</span>
        </div>
      </header>

      <div className="post-content">
        <div className="post-content__title">
          <h2>{title}</h2>
        </div>
        <div className="post-content__body">
          {
            body.map((paragraph, i) => (
              <p key={i}>
                {paragraph}
              </p>
            ))
          }
        </div>
      </div>
    </li>
  )
}

export default PostItem;