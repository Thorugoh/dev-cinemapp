import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';

import { CineContainer } from './context';
import Routes from './Routes';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <CineContainer>
        <Routes />
      </CineContainer>
    </>
  );
};


export default App;
