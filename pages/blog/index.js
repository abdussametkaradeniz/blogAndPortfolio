import React, { Fragment, useState, useEffect } from "react";
import { Col, Row, Container, Nav } from "react-bootstrap";
import Link from "next/link";
import { BlogCard, BlogCardFullWidth, GeeksSEO } from "widgets";
import BlogArticlesList from "data/blog/blogArticlesData";
import BlankLayout from "layouts/marketing/BlankLayout";
import NavbarDefault from "layouts/marketing/navbars/NavbarDefault";
import Footer from "layouts/marketing/footers/Footer";

const BlogListing = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredArticles, setFilteredArticles] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch("/api/categories");
      const data = await response.json();
      setCategories(data.content);
      setSelectedCategory(data.content[0]);
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    console.log(selectedCategory);
    if (selectedCategory) {
      const filtered =
        selectedCategory.name === "All"
          ? BlogArticlesList.slice(0, 12)
          : BlogArticlesList.filter(
              (article) => article.category === selectedCategory.name
            );
      setFilteredArticles(filtered);
    }
  }, [selectedCategory]);

  return (
    <Fragment>
      {/* Geeks SEO settings  */}
      <GeeksSEO title="Blog | Abdussamet Karadeniz" />

      {/* Default Navbar */}
      <NavbarDefault />

      <main>
        {/* Content */}
        <section className="pb-8 bg-white">
          <Container>
            <Row>
              <Col xl={12} lg={12} md={12} sm={12}>
                {/* Flush Nav */}
                <div className="flush-nav">
                  <Nav>
                    {categories.map((category) => (
                      <Link
                        key={category.id}
                        href="#"
                        className={`nav-link ${
                          selectedCategory &&
                          category.id === selectedCategory.id
                            ? "text-primary"
                            : ""
                        }`}
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category.name}
                      </Link>
                    ))}
                  </Nav>
                </div>
              </Col>
            </Row>
          </Container>

          <Container>
            <Row>
              {/* Show first article in full width  */}
              {BlogArticlesList.filter(function (dataSource) {
                return dataSource.id === 1;
              }).map((item, index) => (
                <Col xl={12} lg={12} md={12} sm={12} key={index}>
                  <BlogCardFullWidth item={item} />
                </Col>
              ))}

              {filteredArticles.map((item, index) => (
                <Col
                  xl={4}
                  lg={4}
                  md={6}
                  sm={12}
                  key={index}
                  className="d-flex"
                >
                  <BlogCard item={item} />
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </main>
      <Footer goToTop={true} />
    </Fragment>
  );
};

BlogListing.Layout = BlankLayout;

export default BlogListing;
