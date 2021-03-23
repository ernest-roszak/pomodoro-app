import React from 'react';

import { GlobalStyle } from 'assets/styles/globalStyles';
import { theme } from 'assets/styles/theme';
import styled, { ThemeProvider } from 'styled-components';
import EditableTimeBox from './EditableTimeBox';
import TimeBoxList from 'components/TimeBoxList/TimeBoxList';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2.5rem;
`;

function Root() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <h1>My Pomodoro App</h1>
      <hr />
      <Grid>
        <EditableTimeBox />
        <TimeBoxList />
      </Grid>
    </ThemeProvider>
  );
}

export default Root;
