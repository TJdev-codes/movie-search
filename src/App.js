import React from 'react';
import './index.css';
import { ThemeProvider } from 'styled-components';
import SearchMovies from './SearchMovies';
import { Container } from './components/styles/Container.styled';
import GlobalStyles from './components/styles/Global';



function App() {
  return (
    
      <>
        <Container>
          <GlobalStyles />
          <h1 className="title">React Movie Search</h1>
          <SearchMovies />
        </Container>
      </>
    
  );
}

export default App;
