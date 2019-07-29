import React from 'react';

import MyProvider from './components/context';
import Show from './components/show';


function App() {

const MyContext = React.createContext();

  return (
    <MyProvider MyContext = {MyContext}>
        <Show MyContext={MyContext} />
    </MyProvider>
  );
}

export default App;
