import React from "react";
// import "./EmployeeCard.css";

function EmployeeCard(props) {
  // console.log(props);
  return (
    // <div className="row">
    <tr>
      <th scope="row">
        <img alt={props.firstName} src={props.picture.large} />
      </th>
      <td>{props.name.first}</td>
      <td>{props.name.last}</td>
      <td>{props.email}</td>
      <td>{props.phone}</td>
    </tr>
  );
}

export default EmployeeCard;
