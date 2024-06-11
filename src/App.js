import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import PostsList from './PostsList';
import DetailsPage from './DetailsPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PostsList />} />
      <Route path="/post/:id" element={<DetailsPage  />} />
    </Routes>
  );
};

export default App;