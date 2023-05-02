import moment from 'moment';

const Footer = () => {
  return (
    <footer class="footer mt-auto py-3 bg-light">
      <div class="container">
        <span class="text-muted">Employee Poll - {moment().year()}</span>
      </div>
    </footer>
  );
};

export default Footer;
