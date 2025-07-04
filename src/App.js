import React, { useState } from 'react';
import { Box, CssBaseline, Container } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MovieListProvider } from './context/MovieListContext';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Home from './pages/Home';
import MyList from './pages/MyList';
import MovieDetails from './pages/MovieDetails';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <MovieListProvider>
      <Router>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
          
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Header />
            <Container maxWidth="xl">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mylist" element={<MyList />} />
                <Route path="/movie/:id" element={<MovieDetails />} />
              </Routes>
            </Container>
          </Box>
        </Box>
      </Router>
    </MovieListProvider>
  );
}

export default App;