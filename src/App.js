import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Button, { TertiaryButton, SecondaryButton } from './components/Buttons';
import { GlobalStyle, darkTheme, defaultTheme } from './utils';

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <button
        style={{
          margin: '0 16px 24px',
          padding: '8px',
          background: 'none',
          cursor: 'pointer',
          border: '2px solid #000',
          marginTop: '60px',
        }}
        onClick={() => setUseDarkTheme(true)}
      >
        Dark theme
      </button>
      <button
        style={{
          margin: '0 16px 24px',
          padding: '8px',
          background: 'none',
          cursor: 'pointer',
          border: '2px solid #000',
          marginTop: '60px',
        }}
        onClick={() => setUseDarkTheme(false)}
      >
        Default theme
      </button>
      <div
        style={{
          background: useDarkTheme
            ? defaultTheme.primaryColor
            : darkTheme.primaryColor,
          width: '100vw',
          height: '90vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <TertiaryButton
          Buttonmodifiers={['large', 'warning', 'secondaryButtonWarning']}
        >
          Nothing
        </TertiaryButton>
        <SecondaryButton modifiers={['error', 'tertiaryButtonError']}>
          Nothing Again
        </SecondaryButton>
      </div>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
