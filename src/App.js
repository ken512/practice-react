import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import PostsList from './PostsList';
import DetailsPage from './DetailsPage';

const App = ({ src }) => {
  return (
    <Routes>
      <Route path="/" element={<PostsList src={src} />} />
      <Route path="/post/:id" element={<DetailsPage src={src} />} />
    </Routes>
  );
};

export default App;