import { useLocation, useParams, useNavigate } from 'react-router-dom';

export default function wrapCommonRouter(Component) {
  return props => {
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    return <Component {...props} router={{ params, location, navigate }} />;
  };
}
