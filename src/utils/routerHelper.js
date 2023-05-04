import { useLocation, useParams, useNavigate } from 'react-router-dom';

/**
 * @param {JSX.Element} Component 
 * @returns {JSX.Element} A new component with additional router's hooks
 */
export default function withRouter(Component) {
  return props => {
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    return <Component {...props} router={{ params, location, navigate }} />;
  };
}
