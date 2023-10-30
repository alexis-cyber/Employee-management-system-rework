import React from 'react';
import imageHome from '../img/Homeimage-Employee.jpg';
import Image from 'react-bootstrap/Image';
import NavMenu from './NavMenu';


const Home = () => {
  return (
    <div className="App">
      <NavMenu />
      <a href="/employees">
      <Image src={imageHome} width={'660px'} className="mt-4" />
      </a>
      {/* <h1>Employee Management System</h1> */}
      
    </div>
  );
};

export default Home;
