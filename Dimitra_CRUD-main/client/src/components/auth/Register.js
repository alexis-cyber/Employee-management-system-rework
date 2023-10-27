import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col, Card } from 'react-bootstrap';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {

  let [name, setName] = useState("");
   let [email, setEmail] = useState("");
   let [password, setPassword] = useState("");

   let navigate = useNavigate();

  //  async function handleRegister(e) {
  //   e.preventDefault();
  //   let res = await axios.post("http://localhost:8000/signUp", {
  //     name, email, password,
  //   });
  //   alert(res.data.msg);
  //   navigate("/login");
  //  }

  async function handleRegister(e) {
    e.preventDefault(); // Prevent the default form submission 
    try {
    let res = await axios.post("http://localhost:8000/signUp", {
      name, email, password,
    });
    // Save the received token in the browser's localStorage
      localStorage.setItem("token", res.data.token);
      navigate("/employee/create");
      alert("User registered successfully");
    } catch (error) {
      console.log(error);
      alert("Registration failed. Please try again");
    }
  }



  return (
    <Container className="mt-4">
      <Row>
        <Col md={{ span: 6, offset: 3 }} lg={{ span: 4, offset: 4 }}>
          <Card>
            <Card.Body>
              <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>
                <hr />
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group>

                <Button variant="primary" type="submit">
                  Register
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
