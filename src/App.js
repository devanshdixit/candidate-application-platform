import React from 'react';
import { Provider } from 'react-redux';
import { Container, Box } from '@mui/material';
import store from './store/store';
import JobList from './components/JobList';
import Filters from './components/Filters';

const App = () => {
  return (
    <Provider store={store}>
      <Container>
        <Box sx={{ marginTop: 4 }}>
          <Filters />
          <JobList />
        </Box>
      </Container>
    </Provider>
  );
};

export default App;
