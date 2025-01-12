// import node module libraries
import React from "react";
import { Card, Row, Col, Image } from "react-bootstrap";
import Link from "next/link";
import PropTypes from "prop-types";
import truncateHtml from "html-truncate";

const BlogCard = ({ item }) => {
  return (
    <Card className="mb-4 shadow-lg">
      <Link href={`/blog/${item.id}`} passHref legacyBehavior>
        <Card.Img
          variant="top"
          src={item.images?.[0]?.url ?? "/images/blog/center-img.jpg"}
          className="rounded-top-md img-fluid"
        />
      </Link>
      {/* Card body  */}
      <Card.Body>
        <Link href="#" className={`fs-5 fw-semi-bold d-block mb-3`}>
          {item.category?.name ?? "All"}
        </Link>
        <h3>
          <Link href={`/blog/${item.id}`} className="text-inherit">
            {item.title}
          </Link>
        </h3>
        <p
          dangerouslySetInnerHTML={{ __html: truncateHtml(item.content, 250) }}
        ></p>
        {/*  Media content  */}
        <Row className="align-items-center g-0 mt-4">
          <Col className="col-auto">
            <Image
              src={"/images/avatar/avatar-1.jpg"}
              alt=""
              className="rounded-circle avatar-sm me-2"
            />
          </Col>
          <Col className="col lh-1">
            <h5 className="mb-1">{"Abdussamet Karadeniz"}</h5>
            <p className="fs-6 mb-0">
              {new Date(item.createdAt)
                .toLocaleDateString("tr-TR", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })
                .replace(/\./g, " ")}
            </p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

// Typechecking With PropTypes
BlogCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default BlogCard;
