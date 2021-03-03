import './post-item.styles.scss';

const PostItem = ({ post: { name, title, body, avatarUrl } }) => {
  // console.log(post);
  return (
    <li className="post-item">
      <header className="post-item__header">
        <div className="post-item__avatar">
          <img src={avatarUrl} alt={`${name}'s avatar`} />
        </div>

        <div className="post-item__meta">
          <h3>
            {name}
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
              <p key={i} className="">
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