import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function ResetPassword({
  handleOnChange,
  email,
  handleResetSubmit,
  formChange,
}) {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info text-center">Reset Password</h1>
          <hr />
          <Form onSubmit={handleResetSubmit}>
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

            <Button type="submit">Reset</Button>
          </Form>
          <hr />
        </Col>
      </Row>

      <Row>
        <Col>
          <a href="#!" onClick={() => formChange("login")}>
            Login
          </a>
        </Col>
      </Row>
    </Container>
  );
}
ResetPassword.protoTypes = {
  handleOnChange: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  handleResetSubmit: PropTypes.func.isRequired,
  formChange: PropTypes.func.isRequired,
};

export default ResetPassword;
