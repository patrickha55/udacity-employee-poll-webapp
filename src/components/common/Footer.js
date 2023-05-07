import moment from 'moment';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container">
        <span className="text-muted">Employee Poll - {moment().year()}</span>
      </div>
    </footer>
  );
};

export default Footer;
