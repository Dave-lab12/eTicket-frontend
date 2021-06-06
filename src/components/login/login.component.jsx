import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Login({ handleOnChange, email, password, handleSubmit, formChange }) {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info text-center">Client login</h1>
          <hr />
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                placeholder="Enter Email"
                required
                onChange={handleOnChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>password</Form.Label>
              <Form.Control
                type="Password"
                name="Password"
                placeholder="Enter Password"
                required
                value={password}
                onChange={handleOnChange}
              />
            </Form.Group>
            <Button type="submit">Login</Button>
          </Form>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="#!" onClick={() => formChange("reset")}>
            Forget Password
          </a>
        </Col>
      </Row>
    </Container>
  );
}
Login.protoTypes = {
  handleOnChange: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  formChange: PropTypes.func.isRequired,
};

export default Login;
