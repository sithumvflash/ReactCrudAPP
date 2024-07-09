import React, { Fragment } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from "./Employees";

function Home() {
  const handleDelete = (id) => {
    var index = Employees.map(function (e) {
      return e.id;
    }).indexOf(id);

    Employees.splice(index, 1);
  };

  return (
    <Fragment>
      <div style={{ margin: "10rem" }}>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Employees && Employees.length > 0 ? (
              Employees.map((item) => (
                <tr key={item.Name}>
                  <td>{item.Name}</td>
                  <td>{item.Age}</td>
                  <td>
                    <Button onClick={() => alert(item.id)}>Edit</Button>
                    &nbsp;
                    <Button onClick={() => handleDelete(item.id)}>
                      DELETE
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2">No data available</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </Fragment>
  );
}

export default Home;
