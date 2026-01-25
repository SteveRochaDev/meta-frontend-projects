import { useState } from 'react';
import './App.css';

import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import HomePage from './HomePage';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const login = () => setLoggedIn(true);
  const logout = () => setLoggedIn(false);

  return (
    <div>
      {loggedIn ? (
        <>
          <HomePage />
          <LogoutButton logout={logout} />
        </>
      ) : (
        <LoginButton login={login} />
      )}
    </div>
  );
}

export default App;
