const PostItem = ({ title, username, body }) => {
  return (
    <li>
      <header>
        <h2 className="post-title">{title}</h2>
        <h3 className="post-author">
          {username}
        </h3>
      </header>
      <div>{body}</div>
    </li>
  )
}

export default PostItem;