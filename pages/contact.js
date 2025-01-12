import BlankLayout from "layouts/marketing/BlankLayout";
import { Fragment } from "react";
import { GeeksSEO } from "widgets";
import NavbarDefault from "layouts/marketing/navbars/NavbarDefault";
import Footer from "layouts/marketing/footers/Footer";
import ContactWithText from "sub-components/contact/ContactWithText";
const Contact = () => {
  return (
    <Fragment>
      <GeeksSEO title="Contact | Abdussamet Karadeniz" />
      <NavbarDefault />
      <ContactWithText />
      <Footer />
    </Fragment>
  );
};

Contact.Layout = BlankLayout;

export default Contact;
