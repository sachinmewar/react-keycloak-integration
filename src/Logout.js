
import { useHistory } from 'react-router-dom';

const Logout = ({ keycloak }) => {

   const history = useHistory();
   const logoutHandler = () => {
      history.push('/');
      keycloak.logout();
   };
   return (
      <button onClick={logoutHandler}> Logout </button>
   );
};

export default Logout;