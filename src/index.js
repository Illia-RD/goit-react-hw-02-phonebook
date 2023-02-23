import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';

import { GlobalStyle } from 'components/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'components/utils/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
      <GlobalStyle />
    </React.StrictMode>
  </ThemeProvider>
);
