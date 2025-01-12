import React, { Fragment, useMemo, useState, useEffect } from "react";
import { Col, Row, Card, Button, Container } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { Pagination } from "sub-components";
import { useRouter } from "next/router";

const BlogList = () => {
  const customStyles = {
    headCells: {
      style: {
        fontWeight: "bold",
        fontSize: "14px",
        backgroundColor: "#F1F5FC",
      },
    },
    cells: {
      style: {
        color: "#64748b",
        fontSize: "14px",
      },
    },
  };
  const columns = [
    { name: "post Id", selector: (row) => row.id, sortable: true },
    { name: "Post Title", selector: (row) => row.title, sortable: true },
    {
      name: "Post Category",
      selector: (row) => row.category.name,
      sortable: true,
    },
    { name: "Post Status", selector: (row) => row.status, sortable: true },
    { name: "Post Date", selector: (row) => row.createdAt, sortable: true },
    {
      name: "Actions",
      cell: (row) => (
        <Button
          variant="primary"
          onClick={() => router.push(`/blog/create?id=${row.id}`)}
        >
          Update
        </Button>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];
  // Filter code started
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([]);

  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/posts/get-all-posts");
        const data = await response.json();
        console.log(data); // Convert the response to JSON
        setData(data); // Assuming the API returns the array of posts directly
        setFilter(data); // Update the filter as well with the fetched data
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []); // Ensure this effect runs only once on component mount

  useEffect(() => {
    const result = data.filter((item) => {
      return (
        item.title.toLowerCase().match(search.toLocaleLowerCase()) ||
        item.category.name.toLowerCase().match(search.toLocaleLowerCase()) ||
        item.status.toLowerCase().match(search.toLocaleLowerCase()) ||
        item.createdAt.toLowerCase().match(search.toLocaleLowerCase())
      );
    });
    setFilter(result);
  }, [search, data]);

  const subHeaderComponentMemo = useMemo(() => {
    return (
      <Fragment>
        <input
          type="text"
          className="form-control me-4 mb-4"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Fragment>
    );
  }, [search]);

  const ActionButtons = () => {
    return (
      <Fragment>
        <Button variant="light">Excel</Button>
        <Button variant="light">CSV</Button>
        <Button variant="light">Print</Button>
      </Fragment>
    );
  };
  const actionsMemo = React.useMemo(() => <ActionButtons />, []);

  const BootstrapCheckbox = React.forwardRef(({ onClick, ...rest }, ref) => (
    <div className="form-check">
      <input
        htmlFor="bootstrap-check"
        type="checkbox"
        className="form-check-input"
        ref={ref}
        onClick={onClick}
        {...rest}
      />
      <label className="form-check-label" id="bootstrap-check" />
    </div>
  ));

  BootstrapCheckbox.displayName = "BootstrapCheckbox";

  return (
    <Fragment>
      <main>
        <section className="pb-8">
          <Container>
            <Row className="mt-10">
              <Col md={12} xs={12} className="mb-5">
                <Card>
                  <Card.Header>
                    <h4 className="mb-1">Blog List</h4>
                  </Card.Header>
                  <Card.Body className="px-0">
                    <DataTable
                      customStyles={customStyles}
                      columns={columns}
                      data={filter}
                      pagination
                      paginationComponent={Pagination}
                      selectableRows
                      selectableRowsHighlight
                      selectableRowsComponent={BootstrapCheckbox}
                      highlightOnHover
                      subHeader
                      subHeaderComponent={subHeaderComponentMemo}
                      paginationRowsPerPageOptions={[3, 5, 10]}
                      subHeaderAlign="left"
                      actions={actionsMemo}
                    />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </Fragment>
  );
};

export default BlogList;
