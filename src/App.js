import React from 'react';
import './index.css';
// import { ThemeProvider } from 'styled-components';
import SearchMovies from './SearchMovies';
import { Container } from './components/styles/Container.styled';
import GlobalStyles from './components/styles/Global';
import Header from './components/styles/Header.styled';



function App() {
  return (
    
      <>
        <Container>
          <GlobalStyles />
          <Header>React Movie Search</Header>
          <SearchMovies />
        </Container>
      </>
    
  );
}

export default App;
