import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import PostsList from './PostsList';
import DetailsPage from './DetailsPage';
import InquiryPage from './InquiryPage';
const App = () => {


  return (
    <Routes>
      <Route path="/" element={<PostsList />} />
      <Route path="/post/:id" element={<DetailsPage  />} />
      <Route path="/Inquiry" element={<InquiryPage />} />
    </Routes>
  );


};

export default App;