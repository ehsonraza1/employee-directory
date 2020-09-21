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
      <td scope="row">{props.name.first}</td>
      <td scope="row">{props.name.last}</td>
      <td scope="row">{props.email}</td>
      <td scope="row">{props.phone}</td>
    </tr>
  );
}

export default EmployeeCard;
