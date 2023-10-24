import React from 'react';
import imageHome from '../img/homeimage.jpg';
import Image from 'react-bootstrap/Image';
import NavMenu from './NavMenu';

const Home = () => {
  return (
    <div className="App">
      <NavMenu />
      <Image src={imageHome} width={'600px'} className="mt-4" />
      <h1>Employee Management System</h1>
    </div>
  );
};

export default Home;
