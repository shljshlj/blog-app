import { Link } from 'react-router-dom';

// TODO

const ProfileSection = ({ section, children }) => {
  return (
    <div className="user-section">
      <div className="user-section__heading">
        <h2>{section.title}</h2>
      </div>

      {/* {children && children.map(child => <ProfileSubSection child={child} />)} */}

      <div className="user-section--sub">
        <div className="user-section__subheading">
          <h3>Contact</h3>
        </div>

        <div className="section--body">
          <div className="user-section--sub__email">
            <div className="icon--email">
              <span>Icon</span>
            </div>
            <div>
              {'email'}
            </div>
          </div>

          <div className="user-section--sub__website">
            <div className="icon--website">
              <span>Icon</span>
            </div>
            <div>
              {/* <a href={"http://" + website} rel="noreferrer noopener">{website}</a> */}
              <Link to={{ pathname: "http://website" }} target="_blank">{'website'}</Link>
            </div>
          </div>

          <div className="user-section--sub__phone">
            <div className="icon--phone">
              <span>Icon</span>
            </div>
            <div>
              { }
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}