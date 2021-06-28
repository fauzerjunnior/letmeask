import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { AuthContextProvider } from './contexts/AuthContext';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <Router>
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>
    </Router>
  );
};

export default App;
