import React, { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import {
  Col,
  Row,
  Container,
  Form,
  Button,
  Card,
  ListGroup,
} from "react-bootstrap";
import { Search as SearchIcon } from "react-bootstrap-icons";
import { BlogCard, GeeksSEO } from "widgets";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("/api/posts/get-all-posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      });

    fetch("/api/categories")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data.content);
      });
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  return (
    <Fragment>
      <GeeksSEO title="Blog | Abdussamet Karadeniz" />

      {/* Page Content */}
      <section className="pb-16 bg-white">
        <Container>
          <Row>
            <Col lg={8} md={7} sm={12} className="mt-5">
              <Row>
                {posts
                  .filter(
                    (item) =>
                      item.status === "ACTIVE" &&
                      item.title.toLowerCase().includes(searchQuery)
                  )
                  .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                  .map((item, index) => (
                    <Col lg={6} md={12} sm={12} key={index} className="d-flex">
                      <BlogCard item={item} />
                    </Col>
                  ))}
              </Row>
            </Col>
            <Col lg={4} md={5} sm={12} className="mt-5 md-0">
              {/* search */}
              <div className="mb-4">
                <div className="mb-3 position-relative">
                  <Form.Control
                    type="search"
                    placeholder="Search..."
                    onChange={handleSearchChange}
                    value={searchQuery}
                    style={{ paddingRight: "40px" }}
                  />
                  <span
                    className="position-absolute end-0 top-0 my-2 me-3"
                    style={{ right: "10px" }}
                  >
                    <SearchIcon size={15} className="me-1" />
                  </span>
                </div>
              </div>
              {/* card for Recent Posts */}
              <Card className="mb-4 border ">
                <Card.Body className="p-4">
                  <h3>Recent Posts</h3>
                  <div className="mt-3">
                    <ListGroup
                      as="ul"
                      className="mb-0"
                      bsPrefix="list-unstyled"
                    >
                      {posts
                        .slice(0, 4)
                        .sort(
                          (a, b) =>
                            new Date(b.createdAt) - new Date(a.createdAt)
                        )
                        .map((item, index) => (
                          <ListGroup.Item
                            as="li"
                            className="mb-3"
                            bsPrefix=" "
                            key={item.id}
                          >
                            <p
                              className="lh-lg text-muted"
                              style={{
                                marginLeft: "10px",
                              }}
                            >
                              <Link
                                href={`/blog/${item.slug}`}
                                className="text-inherit text-muted"
                              >
                                {item.title}
                              </Link>
                            </p>
                          </ListGroup.Item>
                        ))}
                    </ListGroup>
                  </div>
                </Card.Body>
              </Card>
              {/* card for Categories */}
              <Card className="mb-4 border ">
                <Card.Body className="p-4">
                  <h3>Categories</h3>
                  <div className="mt-3">
                    <ListGroup
                      as="ul"
                      className="mb-0 nav nav-x-0 flex-column"
                      bsPrefix="list-unstyled"
                    >
                      {categories.map((item, index) => (
                        <ListGroup.Item
                          as="li"
                          className="lh-lg mb-1"
                          bsPrefix=" "
                          key={item.id}
                        >
                          <i
                            className="fe fe-arrow-right text-muted"
                            style={{ marginLeft: "10px" }}
                          ></i>
                          <Link
                            href={`/blog/category/${item.slug}`}
                            className="text-link d-inline"
                          >
                            {item.name}
                          </Link>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default Blog;
