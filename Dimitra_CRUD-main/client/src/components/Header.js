import React from 'react';
import { Breadcrumb, Col, Container, Row } from 'react-bootstrap';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="page-header">
      <Container>
        <Row>
          <Col>
            <div className="header-content">
              <h1>Add Employee</h1>
              <Breadcrumb>
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>
                  <FaHome /> Home
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Add Employee</Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
