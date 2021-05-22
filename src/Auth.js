import React, { useState, useEffect } from 'react';
import UserInfo from './UserInfo';
import Logout from './Logout';
import Keycloak from 'keycloak-js';


const Auth = () => {

   const [keycloakValue, setKeycloakValue] = useState(null);
   const [authenticationState, setAuthenticatedState] = useState(false);

   useEffect(() => {
      console.log('useEffect Working....');
      const keycloak = Keycloak('/keycloak.json');
      console.log(keycloak);
      keycloak.init(
         {
            onLoad: 'login-required'
         }
      ).then(
         authenticated => {
            setKeycloakValue(keycloak);
            setAuthenticatedState(authenticated);
         }
      )
   }, [])

   return (
      <div>
         {
            authenticationState &&
            <div>
               <p>
                  This is a Keycloak-secured component of your application. You shouldn't be able to see this
                  unless you've authenticated with Keycloak.
          </p>
               <UserInfo keycloak={keycloakValue} />
               <Logout keycloak={keycloakValue} />
            </div>
         }
      </div>
   );
}
export default Auth;