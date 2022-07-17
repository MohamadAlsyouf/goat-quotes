import React from 'react';
import { Link } from 'react-router-dom';

export default function Home(props) {
  return (
    <div className='home-wrapper'>
      <p className='welcome-text'>Welcome to Goat Quote!</p>
      <p>View 10 random quotes by clicking this button</p>
      <Link to="/get-quotes"><button className='home-button'>View Quotes</button></Link>
    </div>
  );
}
