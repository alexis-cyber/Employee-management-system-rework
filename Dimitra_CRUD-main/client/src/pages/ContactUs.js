import React from "react";
import { Breadcrumb, Col, Container, Row } from 'react-bootstrap';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
 
const Contact = () => {


  // Style for the content section
  const contactStyle = {
    margin: "100px",
  
  };

  return (
    <div className="contact" style= {contactStyle}>
      <Breadcrumb>
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>
                  <FaHome/>
                </Breadcrumb.Item>
                <Breadcrumb.Item active></Breadcrumb.Item>
              </Breadcrumb>
      <h1 style= {{fontWeight: "bold"}}>Contact us</h1>
      <p>Phone: +3000000000</p>
      <p>Email: info@example.com</p>
    </div>
  );
};
 
export default Contact;
