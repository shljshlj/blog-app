const PostItem = ({ title, username, body }) => {
  return (
    <li className=" center mw5 mw6-ns br3 ba b--black-10 mv4 ">
      <header className="bg-near-white b3 br--top pv2 ph3">
        <h2 className="post-title f4 mv2">{title}</h2>
        <h3 className="post-author black-60 mt0 mb2">
          {username}
        </h3>
      </header>
      <div className="pa3 bt b--black-10">
        <p className="f6 f5-ns lh-copy measure">
          {body}
        </p>
      </div>
    </li>
  )
}

export default PostItem;