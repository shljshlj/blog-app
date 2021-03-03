import { Link } from 'react-router-dom';

import './user-item.styles.scss';

const UserItem = ({ user: { id, name, username, city, companyName, avatarSVG }, path }) => {
  return (
    <li className="user-item">
      <div className="avatar">
        <Link to={`${path}/${id}`}>
          <div className="avatar__container">
            <img src={avatarSVG} alt={`${name}'s avatar`} />
          </div>
        </Link>
      </div>
      <div className="about">
        <div className="user-item__title">
          <h2>
            <Link to={`${path}/${id}`}>
              {name}
            </Link>
          </h2>
          <span>{username}</span>
        </div>
        <div className="user-item__info">
          {city && <span>Lives in {city}</span>}
          {companyName && <span>Works at {companyName}</span>}
        </div>
      </div>
    </li>
  )
}

export default UserItem;