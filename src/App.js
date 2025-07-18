// Updated App.js with all new features
import React, { useState } from 'react';
import { Box, CssBaseline, Container } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MovieListProvider } from './context/MovieListContext';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Home from './pages/Home';
import MyList from './pages/MyList';
import MovieDetails from './pages/MovieDetails';
import SearchResults from './pages/SearchResults';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <MovieListProvider>
      <Router>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
          
          <Box component="main" sx={{ flexGrow: 1, minHeight: '100vh' }}>
            <Header setActiveTab={setActiveTab} />
            <Container maxWidth="xl" sx={{ py: 4 }}>
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/mylist" element={<MyList />} />
                  <Route path="/movie/:id" element={<MovieDetails />} />
                  <Route path="/search" element={<SearchResults />} />
                </Routes>
              </AnimatePresence>
            </Container>
            <Footer />
          </Box>
          <BackToTop />
        </Box>
      </Router>
    </MovieListProvider>
  );
}

export default App;