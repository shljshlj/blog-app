import './footer.styles.scss';

const Footer = () => {
  return (
    <footer className="page-footer">
      <div>
        Copyright &copy;
        <span>{new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}

export default Footer;