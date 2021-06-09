import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AddTicketForm from "../../components/add-ticket-form/addTicketForm.component";
import BreadCrumb from "../../components/breadcrumb/breadcrumb.component";
import { shortText } from "../../utils/validation";

const initialFormData = {
  subject: "",
  issueDate: "",
  detail: "",
};
const initialFormError = {
  subject: false,
  issueDate: false,
  detail: false,
};
function AddTicket() {
  const [formData, setFormData] = useState(initialFormData);
  const [formError, setFormError] = useState(initialFormError);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setFormError(initialFormError);
    const isValid = shortText(formData.subject);
    setFormError({
      ...initialFormData,
      subject: !isValid,
    });
    console.log("form sent");
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Container>
      <Row>
        <Col>
          <BreadCrumb page="New Ticket" />
        </Col>
      </Row>
      <Row>
        <Col>
          <AddTicketForm
            handleOnChange={handleOnChange}
            formData={formData}
            handleOnSubmit={handleOnSubmit}
            formError={formError}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default AddTicket;
