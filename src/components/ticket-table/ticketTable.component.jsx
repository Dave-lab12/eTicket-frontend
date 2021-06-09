import React from "react";
import { Table } from "react-bootstrap";
function TicketTable({ data }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>subjects</th>
          <th>status</th>
          <th>opened date</th>
        </tr>
      </thead>
      <tbody>
        {data.length ? (
          data.map((row) => {
            return (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.subject}</td>
                <td>{row.status}</td>
                <td>{row.addedAt}</td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan="4" className="text-center">
              No ticket to display
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
}

export default TicketTable;
