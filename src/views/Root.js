import React from 'react';

import { GlobalStyle } from 'assets/styles/globalStyles';
import { theme } from 'assets/styles/theme';
import { ThemeProvider } from 'styled-components';
// import EditableTimeBox from './EditableTimeBox';
import TimeBoxList from 'components/TimeBoxList/TimeBoxList';

function Root() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <h1>My Pomodoro App</h1>
      <hr />
      {/* <EditableTimeBox /> */}
      <TimeBoxList />
    </ThemeProvider>
  );
}

export default Root;
