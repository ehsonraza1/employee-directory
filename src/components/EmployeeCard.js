import React from "react";
// import "./EmployeeCard.css";

function EmployeeCard(props) {
  return (
    // <div className="row">
    <tr>
      <th scope="row">
        <img alt={props.firstName} src={props.picture} />
      </th>
      <td>{props.firstName}</td>
      <td>{props.lastName}</td>
      <td>{props.email}</td>
      <td>{props.phone}</td>
    </tr>
  );
}

export default EmployeeCard;
