import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let navigate = useNavigate();

//   async function handleLogin(e) {
//     try {
//       e.preventDefault();
//       let res = await axios.post("http://localhost:8000/login", {
//           email,
//           password,
//       });

//       // Save the token in the browser
//       if(res.status === 200) {
//         alert(res.data.msg);
//         localStorage.setItem("token", res.data.token);
//         navigate("/");
//       }
      
//     } catch (error) {
//        alert("Can not login, please check your email or password.");
//     }
//   }


async function handleLogin(e) {
    try {
        e.preventDefault();
        let res = await axios.post("http://localhost:8000/login", {
            email,
            password,
        });
  
        // Save the token in the browser
        let token = res.data.token;
        localStorage.setItem("token", res.data.token);

        navigate("/");
        
        const decodedToken = jwt_decode(token);
        console.log(decodedToken);  
    } catch (error) {
        alert("Can not login, please check your email or password.");    
    }

  }

  return (
      <Container className="mt-4">
          <Row>
              <Col md={{ span: 6, offset: 3 }} lg={{ span: 4, offset: 4 }}>
                  <Card>
                      <Card.Body>
                          <Form onSubmit={handleLogin}>
                              <Form.Group
                                  className="mb-3"
                                  controlId="formBasicEmail"
                              >
                                  <Form.Label>Email address</Form.Label>
                                  <Form.Control
                                      type="email"
                                      value={email}
                                      onChange={(e) => setEmail(e.target.value)}
                                  />
                              </Form.Group>

                              <Form.Group
                                  className="mb-3"
                                  controlId="formBasicPassword"
                              >
                                  <Form.Label>Password</Form.Label>
                                  <Form.Control
                                      type="password"
                                      value={password}
                                      onChange={(e) =>
                                          setPassword(e.target.value)
                                      }
                                  />
                              </Form.Group>

                              <div>
                                  <Button variant="primary" type="submit">
                                      Login
                                  </Button>
                                  <Link to="/register">Create new user</Link>
                              </div>
                          </Form>
                      </Card.Body>
                  </Card>
              </Col>
          </Row>
      </Container>
  );
};

export default Login;
