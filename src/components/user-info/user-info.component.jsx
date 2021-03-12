import IconSvg from '../icon-svg/iconSvg.component';

const InfoSectionRow = ({ info: { infoType, infoValue, text } }) => {
  if (!infoValue) return null;

  return (
    <div className="info-section__row">
      <div className="info-section__row--icon">
        <span>
          <IconSvg name={infoType} width="20" height="20" fill="#7a7a7a" />
        </span>
      </div>
      <div>{text}<span className="info-section__row--value">{infoValue}</span></div>
    </div>
  );
}

const InfoSection = ({ title, children }) => {
  return (
    <div className="info-section">
      <div className="info-section__heading">
        <h2>{title}</h2>
      </div>
      {children}
    </div>
  )
}

export {
  InfoSection,
  InfoSectionRow
}