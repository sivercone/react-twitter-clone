import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Sign } from './pages/Sign';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import { Home } from './pages/Home';

function App() {
   return (
      <>
         <Switch>
            <Route path="/" component={Sign} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/signup" component={SignUp} exact />
            <Route path="/home" component={Home} exact />
         </Switch>
      </>
   );
}

export default App;
