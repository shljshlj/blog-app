import IconSvg from '../icon-svg/iconSvg.component';

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