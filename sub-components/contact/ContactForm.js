import { Button, Col, Form, Row } from "react-bootstrap";

const ContactForm = () => {
  const contactReason = [
    { value: "Design", label: "Design" },
    { value: "Development", label: "Development" },
    { value: "Other", label: "Other" },
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      firstName: event.target.formFirstName.value,
      lastName: event.target.formLastName.value,
      email: event.target.formEmail.value,
      message: event.target.formMessages.value,
    };

    // Next.js API route'a POST isteği gönder
    fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => console.log("Success:", data))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="px-4 px-xl-20 py-8 py-lg-0">
      {/* form section */}
      <div id="form">
        <Form onSubmit={handleSubmit}>
          <Row>
            {/* First Name */}
            <Col md={6} sm={12}>
              <Form.Group className="mb-3" controlId="formFirstName">
                <Form.Label>
                  First Name:<span className="text-danger">*</span>
                </Form.Label>
                <Form.Control type="text" placeholder="First Name" required />
              </Form.Group>
            </Col>

            {/* Last Name */}
            <Col md={6} sm={12}>
              <Form.Group className="mb-3" controlId="formLastName">
                <Form.Label>
                  Last Name:<span className="text-danger">*</span>
                </Form.Label>
                <Form.Control type="text" placeholder="Last Name" required />
              </Form.Group>
            </Col>

            {/* Email */}
            <Col md={12} sm={12}>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>
                  Email:<span className="text-danger">*</span>
                </Form.Label>
                <Form.Control type="email" placeholder="Email" required />
              </Form.Group>
            </Col>

            {/* Messages */}
            <Col md={12} sm={12}>
              <Form.Group className="mb-3" controlId="formMessages">
                <Form.Label>Message:</Form.Label>
                <Form.Control as="textarea" placeholder="Messages" rows={3} />
              </Form.Group>
            </Col>

            {/* button */}
            <Col md={12} sm={12} className="d-flex justify-content-center">
              <Button variant="primary" type="submit">
                Send Message
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};
export default ContactForm;
