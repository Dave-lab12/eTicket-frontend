import React from "react";
import { Jumbotron, Form, Button, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import "./add-ticket-form.css";
function AddTicketForm({
  handleOnSubmit,
  handleOnChange,
  formData,
  formError,
}) {
  return (
    <Jumbotron className="mt-3 add-new-ticket bg-light">
      <h1 className="text-info text-center">Add New Ticket</h1>
      <hr />
      <Form autoComplete="off" onSubmit={handleOnSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            Subject
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="text"
              name="subject"
              value={formData.subject}
              placeholder="Subject"
              required
              onChange={handleOnChange}
            />
            <Form.Text className="text-danger">
              {formError.subject && "Subject is required"}
            </Form.Text>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            Issue Found
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="date"
              name="issueDate"
              required
              value={formData.date}
              onChange={handleOnChange}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            password
          </Form.Label>
          <Form.Control
            as="textarea"
            name="detail"
            rows="5"
            value={formData.detail}
            required
            onChange={handleOnChange}
          />
        </Form.Group>
        <Button type="submit" block variant="info">
          Login
        </Button>
      </Form>
    </Jumbotron>
  );
}

AddTicketForm.propTypes = {
  handleOnSubmit: PropTypes.func.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  formError: PropTypes.object.isRequired,
};
export default AddTicketForm;
