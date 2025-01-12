// App.js
import React, { useState, useEffect, Fragment, useRef } from "react";
import dynamic from "next/dynamic";
import {
  Col,
  Row,
  Container,
  Alert,
  Button,
  Dropdown,
  Form,
} from "react-bootstrap";
import "react-quill/dist/quill.snow.css";
import Footer from "layouts/marketing/footers/Footer";
import { useRouter } from "next/router";

// ReactQuill'i dinamik olarak import et
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false, // Server-side rendering devre dışı
  loading: () => <p>Loading...</p>, // Yükleme sırasında gösterilecek bileşen
});

// useInterval hook'unu tanımla
function useInterval(callback, delay) {
  const savedCallback = useRef();

  // En son callback'i hatırla
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Interval ayarla
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

function CreateBlog() {
  const router = useRouter();
  const { id } = router.query;
  const [title, setTitle] = useState("");
  const [initialTitle, setInitialTitle] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useState([]);
  const [richInput, setRichInput] = useState("");
  const [isTitleUnique, setIsTitleUnique] = useState(true);
  const saveTimeoutRef = useRef(null);
  const [alert, setAlert] = useState(null);
  const [status, setStatus] = useState("TEMPLATE");

  useEffect(() => {
    if (id) {
      const fetchCategoriesIfIdNotEmpty = async () => {
        const response = await fetch(`/api/posts/get-by-id?id=${id}`);
        const data = await response.json();
        setTitle(data.title);
        setInitialTitle(data.title);
        setCategoryId(data.category.id);
        setRichInput(data.content);
        setStatus(data.status);
        console.log(data);
      };
      const fetchCategories = async () => {
        const response = await fetch("/api/categories");
        const data = await response.json();
        setCategories(data.content);
      };
      fetchCategoriesIfIdNotEmpty();
      fetchCategories();
    } else {
      const fetchCategories = async () => {
        const response = await fetch("/api/categories");
        const data = await response.json();
        setCategories(data.content); // Make sure to align with the actual structure of your response
      };
      fetchCategories();
    }
  }, [id]);

  useEffect(() => {
    if (
      categories.length > 0 &&
      !categories.some((cat) => cat.id === categoryId)
    ) {
      setCategoryId(categories[0].id); // Ensuring a default category is selected only if categoryId is not in categories
    }
  }, [categories, categoryId]);

  useEffect(() => {
    const handleDebounceSave = () => {
      if (saveTimeoutRef.current !== null) {
        clearTimeout(saveTimeoutRef.current);
      }
      saveTimeoutRef.current = setTimeout(() => {
        if (title && isTitleUnique) {
          handleAutoSave();
        }
      }, 600000);
    };

    handleDebounceSave();

    return () => {
      if (saveTimeoutRef.current !== null) {
        clearTimeout(saveTimeoutRef.current);
      }
    };
  }, [title, richInput]);

  const checkTitleUnique = async (title, categoryId) => {
    const response = await fetch(
      `/api/posts/check-title?title=${encodeURIComponent(
        title
      )}&categoryId=${encodeURIComponent(categoryId)}`
    );
    const data = await response.json();
    setIsTitleUnique(data.isUnique);
    if (!data.isUnique) {
      setAlert({
        variant: "danger",
        message: "Title already exists. Please choose a different title.",
      });
    }
  };

  const AlertDismissible = ({ variant, message, onClose }) => {
    return (
      <Alert variant={variant} dismissible onClose={onClose}>
        <Alert.Heading>{message}</Alert.Heading>
      </Alert>
    );
  };

  const handleAutoSave = async () => {
    if (!isTitleUnique) return;

    const postData = {
      title,
      category: categoryId,
      content: richInput,
      status,
    };

    const response = await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });

    if (!response.ok) {
      setAlert({
        variant: "danger",
        message: "Error during auto-save",
      });
    } else {
      setAlert({
        variant: "success",
        message: "Auto post submitted successfully!",
      });
    }
  };

  const handleSubmit = async () => {
    const postData = {
      title,
      category: categoryId,
      content: richInput,
      status,
    };

    const response = await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });

    if (response.ok) {
      setAlert({
        variant: "success",
        message: "Post submitted successfully!",
      });
    } else {
      setAlert({
        variant: "danger",
        message: "Error submitting post",
      });
    }
  };

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
    clipboard: {
      // Match visual, so the paste matches the current format
      matchVisual: false,
    },
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];

  const statusOptions = ["TEMPLATE", "DELETED", "ACTIVE"];

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    if (newTitle !== initialTitle) {
      checkTitleUnique(newTitle, categoryId);
    }
  };

  return (
    <Fragment>
      <main>
        <section className="pb-8">
          <Container>
            <Row>
              <Col xl={12} lg={12} md={12} sm={12}>
                {alert && (
                  <AlertDismissible
                    variant={alert.variant}
                    message={alert.message}
                    onClose={() => setAlert(null)}
                  />
                )}
              </Col>
              <Row className="mb-3 mt-10">
                <Form>
                  <Row>
                    <Col
                      xl={3}
                      lg={3}
                      md={3}
                      sm={3}
                      className="d-flex justify-content-center align-items-center"
                    >
                      <Dropdown className="mb-3">
                        <Dropdown.Toggle
                          variant="secondary"
                          id="dropdown-basic"
                        >
                          {categoryId &&
                          categories.find((cat) => cat.id === categoryId)
                            .slug !== "all"
                            ? categories.find((cat) => cat.id === categoryId)
                                .name
                            : "Select Category"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          {Array.isArray(categories) &&
                            categories
                              .filter((cat) => cat.slug !== "all")
                              .map((cat) => (
                                <Dropdown.Item
                                  key={cat.id}
                                  onClick={() => setCategoryId(cat.id)}
                                >
                                  {cat.name}
                                </Dropdown.Item>
                              ))}
                        </Dropdown.Menu>
                      </Dropdown>
                    </Col>
                    <Col
                      xl={3}
                      lg={3}
                      md={3}
                      sm={3}
                      className="d-flex justify-content-center align-items-center"
                    >
                      <Form.Control
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={handleTitleChange}
                        onBlur={() => checkTitleUnique(title, categoryId)}
                        className="mb-3 mr-3"
                      />
                    </Col>
                    <Col
                      xl={3}
                      lg={3}
                      md={3}
                      sm={3}
                      className="d-flex justify-content-center align-items-center"
                    >
                      <Button
                        className="btn btn-primary mb-3 ml-3"
                        onClick={handleSubmit}
                        disabled={!isTitleUnique}
                      >
                        Submit Post
                      </Button>
                    </Col>
                    <Col
                      xl={3}
                      lg={3}
                      md={3}
                      sm={3}
                      className="d-flex justify-content-center align-items-center"
                    >
                      <Dropdown className="mb-3">
                        <Dropdown.Toggle
                          variant="secondary"
                          id="status-dropdown"
                        >
                          {status}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          {statusOptions.map((option) => (
                            <Dropdown.Item
                              key={option}
                              onClick={() => setStatus(option)}
                            >
                              {option}
                            </Dropdown.Item>
                          ))}
                        </Dropdown.Menu>
                      </Dropdown>
                    </Col>
                  </Row>
                </Form>
              </Row>
              <Row>
                {title && isTitleUnique && (
                  <ReactQuill
                    value={richInput}
                    onChange={setRichInput}
                    style={{
                      height: "400px",
                      marginBottom: "50px",
                      width: "100%",
                    }}
                  />
                )}
              </Row>
            </Row>
          </Container>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
}

export default CreateBlog;
