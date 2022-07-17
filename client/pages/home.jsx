import React from 'react';
// import CustomLink from '../components/customLink';
import { Link } from 'react-router-dom';

export default function Home(props) {
  return (
    <div className='home-wrapper'>
      <p>Welcome to Goat Quote!</p>
      <button>
        <Link to="/get-quotes">Get Started</Link>
      </button>
    </div>
  );
}
