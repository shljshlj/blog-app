import { Link } from 'react-router-dom';
import IconSvg from '../icon-svg/iconSvg.component';

const UserInfo2 = ({ email, website, phone }) => {
  return (
    <div className="user-section">
      <div className="user-section__heading">
        <h2>About</h2>
      </div>

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
              {email}
            </div>
          </div>

          <div className="user-section--sub__website">
            <div className="icon--website">
              <span>Icon</span>
            </div>
            <div>
              <Link to={{ pathname: "http://" + website }} target="_blank" rel="noreferrer noopener">{website}</Link>
            </div>
          </div>

          <div className="user-section--sub__phone">
            <div className="icon--phone">
              <span>Icon</span>
            </div>
            <div>
              {phone}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

const InfoStackHeading = ({ title }) => (
  <div className="info-stack__heading">
    <h3>{title}</h3>
  </div>
);

const InfoStackRow = ({ withIcon, type, info }) => {
  return (
    <div className="info-stack--row">
      <div className="icon">
        <span>
          {
            withIcon ?
              <IconSvg name={type} width="20" height="20" fill="grey" /> :
              type
          }
        </span>
      </div>
      <div>
        {info}
      </div>
    </div>
  );
}

const InfoSection = ({ title, children }) => {
  console.log(children);
  return (
    <div className="info-section">
      <div className="info-section__heading">
        <h2>{title}</h2>
      </div>
      {children}
    </div>
  )
}

const InfoSubsection = ({ title, data, withIcon }) => {
  console.log(data);

  return (
    <div>
      <InfoStackHeading title={title} />
      {data && data.map(dataObj => <InfoStackRow key={dataObj.type} withIcon={withIcon} type={dataObj.type} info={dataObj.info} />)}
    </div>
  )
}

export {
  InfoSection,
  InfoSubsection
}