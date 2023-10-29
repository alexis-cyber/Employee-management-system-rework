import React from "react";
import { Breadcrumb, Col, Container, Row } from 'react-bootstrap';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "../components/Sidebar.css"
 
export const AboutUs = () => {


// Style for the content section
const contactStyle = {
    margin: "150px",
  
  };

  return (
    <div>
    <div>
    <Container>
        <Row>
          <Col>
            <div className="header-content">
              {/* <h1></h1> */}
              <Breadcrumb>
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>
                  <FaHome/>
                </Breadcrumb.Item>
                <Breadcrumb.Item active></Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    <div className="home" style= {contactStyle}>

      <h1>About us</h1>
      At Employee Management System, our aim is not only to revolutionize employee management but also to create a culture of efficiency, transparency, and collaboration within organizations. We believe that by providing a comprehensive and user-friendly platform, we can empower businesses to optimize their workforce management processes, resulting in increased productivity, reduced costs, and improved employee satisfaction. Our aim is to simplify complex tasks, automate repetitive processes, and provide insightful analytics to enable data-driven decision-making. We strive to be the trusted partner for businesses seeking a modern and intuitive solution for their employee management needs.
    </div>
    </div>
  );
};
 
export const OurAim = () => {

  // Style for the content section
  const contactStyle = {
    margin: "100px",
  
  };


  return (
  <div>
  <div>
    <Container>
        <Row>
          <Col>
            <div className="header-content">
              {/* <h1>Add Employee</h1> */}
              <Breadcrumb>
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>
                  <FaHome className= "home-icon" style={{ stroke: 'transparent' }}/> Home
                </Breadcrumb.Item>
                <Breadcrumb.Item active></Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    <div className="home"  style= {contactStyle}>
      <h1 style= {{fontWeight: "bold"}}>Aim</h1>
      At Employee Management System, our aim is to revolutionize the way businesses handle their workforce. We understand that managing employees efficiently is crucial for the success of any organization. With this in mind, our goal is to provide an all-in-one solution that simplifies and streamlines employee management processes. Whether it's tracking attendance, managing payroll, or facilitating communication, our platform is designed to optimize productivity and enhance the overall employee experience.
    </div>
    </div>
  );
};
 
export const OurVision = () => {

// Style for the content section
  const contactStyle = {
    margin: "100px",
  
  };


  return (
    <div>
    <div>
    <Container>
        <Row>
          <Col>
            <div className="header-content">
              {/* <h1>Add Employee</h1> */}
              <Breadcrumb>
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>
                  <FaHome /> Home
                </Breadcrumb.Item>
                <Breadcrumb.Item active></Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    <div className="home"  style= {contactStyle}>
      <h1 style= {{fontWeight: "bold"}}>Vision</h1>
      Our vision is to empower businesses with the tools and technology they need to excel in employee management. We envision a future where organizations of all sizes can effortlessly handle their workforce, freeing up valuable time and resources to focus on core business objectives. By leveraging the latest advancements in software and automation, we strive to create a seamless employee management experience that promotes collaboration, transparency, and employee satisfaction. Through our innovative solutions, we aim to become the go-to platform for businesses seeking efficient and effective employee management systems.
    </div>
    </div>
  );
};
