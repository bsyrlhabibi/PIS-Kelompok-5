import React from 'react';
import Hero from "../components/Hero";
import CategoriesList from "../components/CategoriesList";

const HomePage = () => {
  return (
    <div className='holder' style={{ marginBottom: '20px' }}>
      <Hero />
      <CategoriesList />
    </div>
  )
}

export default HomePage;
