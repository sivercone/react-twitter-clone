import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Sign } from './pages/sign';
import { Login } from './pages/sign/Login';
import { SignUp } from './pages/sign/SignUp';
import { Home } from './pages/Home';

function App() {
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
