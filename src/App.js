import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';

import LoginForm from './components/LoginComponents/LoginComponent';
import SidebarComponent from './components/SidebarComponents/SidebarComponent';

library.add(fas)

function App() {
  return (
    <BrowserRouter>
      <Route path="/login">
        <LoginForm />
      </Route>
      <Route path="/sidebar">
        <SidebarComponent />
      </Route>
    </BrowserRouter>
  );
}

export default App;
