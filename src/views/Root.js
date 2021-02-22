import React from 'react';

import { GlobalStyle } from 'assets/styles/globalStyles';
import { theme } from 'assets/styles/theme';
import TimeBox from 'components/TimeBox/TimeBox';
import { TimeBoxEditor } from 'components/TimeBoxEditor/TimeBoxEditor';
import { ThemeProvider } from 'styled-components';

function Root() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <h1>My Pomodoro App</h1>
      <hr />
      <TimeBoxEditor />
      <TimeBox />
    </ThemeProvider>
  );
}

export default Root;
