import React from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import { Sign } from './pages/sign';
import { Login } from './pages/sign/Login';
import { SignUp } from './pages/sign/SignUp';
import { Home } from './pages/Home';
import { AuthApi } from './services/api/authApi';
import { useDispatch, useSelector } from 'react-redux';
import { setUserData } from './store/ducks/user/actionCreators';
import { selectIsAuthorized } from './store/ducks/user/selectors';

function App() {
   const dispatch = useDispatch();
   const history = useHistory();
   const isAuthorized = useSelector(selectIsAuthorized);

   const checkAuth = async () => {
      try {
         const { data } = await AuthApi.getMe();
         dispatch(setUserData(data));
         // history.replace('/home');
      } catch (error) {
         console.log(error);
      }
   };

   React.useEffect(() => {
      checkAuth();
   }, []);

   React.useEffect(() => {
      if (isAuthorized) {
         history.push('/home');
      }
   }, [isAuthorized]);

   return (
      <>
         <Switch>
            <Route path="/" component={Sign} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/signup" component={SignUp} exact />
            <Route path="/home" component={Home} />
         </Switch>
      </>
   );
}

export default App;
