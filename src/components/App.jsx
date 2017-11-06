import React from 'react';
import Nav from '@/components/Nav/Nav';
import routes from '@/routes';

const App = () => (
  <div>
    <Nav/>
    {routes}
  </div>
);

export default App;
