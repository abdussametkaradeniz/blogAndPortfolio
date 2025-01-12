import React, { Fragment, useEffect, useState } from "react";
import { Col, Row, Container, Image, Form, Button } from "react-bootstrap";
import { useRouter } from "next/router";
import Link from "next/link";
import { BlogCard, GeeksSEO } from "widgets";
import BlogArticlesList from "data/blog/blogArticlesData";

const BlogArticleSingle = () => {
  const router = useRouter();
  const id = router.query.id;
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`/api/posts/get-by-id?id=${id}`)
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            setPost(data);
          } else {
            console.error("Post not found");
          }
        })
        .catch((error) => console.error("Error fetching post:", error));
    }
  }, [id]);

  // Use the `post` state in your component to render the data
  if (!post) return <div>Loading...</div>;

  const authorAndSharing = () => {
    return (
      <div className="d-flex justify-content-between align-items-center mb-5">
        <div className="d-flex align-items-center">
          <Image
            src={"/images/avatar/avatar-1.jpg"}
            alt=""
            className="rounded-circle avatar-md"
          />
          <div className="ms-2 lh-1">
            <h5 className="mb-1 ">Abdussamet Karadeniz</h5>
            <span className="text-primary">Software Engineer</span>
          </div>
        </div>
        <div>
          <span className="ms-2 text-muted">Share</span>
          <Link href="#" className="ms-2 text-muted">
            <i className="fab fa-instagram"></i>
          </Link>
          <Link href="#" className="ms-2 text-muted">
            <i className="fab fa-linkedin"></i>
          </Link>
          <Link href="#" className="ms-2 text-muted">
            <i className="fab fa-facebook"></i>
          </Link>
          <Link href="#" className="ms-2 text-muted">
            <i className="fab fa-twitter"></i>
          </Link>
        </div>
      </div>
    );
  };

  return (
    <Fragment>
      <section className="py-4 py-lg-8 pb-14 bg-white ">
        <Container>
          <Fragment>
            {/* Geeks SEO settings  */}
            <GeeksSEO title={post.title} />

            <Row className="justify-content-center">
              <Col xl={8} lg={8} md={12} sm={12} className="mb-2">
                <div className="text-center mb-4">
                  <Link
                    href="#"
                    className="fs-5 fw-semi-bold d-block mb-4 text-primary"
                  >
                    {post.category?.name ?? "All"}
                  </Link>
                  <h1 className="display-3 fw-bold mb-4">{post.title}</h1>
                </div>
                {/* Author */}
                {authorAndSharing()}
              </Col>
            </Row>
            <Row className="justify-content-center">
              {/* Image */}
              <Col xl={10} lg={10} md={12} sm={12} className="mb-6 text-center">
                <Image
                  src={post.images?.[0]?.url ?? "/images/blog/center-img.jpg"}
                  alt=""
                  className="img-fluid rounded-3"
                />
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col xl={8} lg={8} md={12} sm={12} className="mb-2">
                {/* Blog Content */}
                <div
                  dangerouslySetInnerHTML={{
                    __html: post.content ?? "",
                  }}
                ></div>
                <hr className="mt-8 mb-5" />
                {/* Author */}
                {authorAndSharing()}
              </Col>
            </Row>
          </Fragment>
        </Container>

        {/* Related Post */}
        <Container>
          <Row>
            <Col xl={12} lg={12} md={12} sm={12}>
              <div className="my-5">
                <h2>Related Post</h2>
              </div>
            </Col>
            {BlogArticlesList.filter(function (dataSource) {
              return (
                dataSource.id === 6 ||
                dataSource.id === 7 ||
                dataSource.id === 15
              );
            }).map((item, index) => (
              <Col xl={4} lg={4} md={6} sm={12} key={index} className="d-flex">
                <BlogCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default BlogArticleSingle;
// withRouter(BlogArticleSingle);
