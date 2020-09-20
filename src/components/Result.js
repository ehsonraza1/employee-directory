import React, { useState } from "react";
import EmployeeCard from "./EmployeeCard";
// import "./Result.css";

function Result(props) {
  const [people, setPeople] = useState(props.people);
  const [searchText, setSearchText] = useState("");

  // console.log(props.people);
  // Sort function for the Employee Directory being returned
  // Componenets not being rendered because its in the array
  const sortName = () => {
    const sortedPeople = [...people];

    sortedPeople.sort((a, b) => a.name.last.localeCompare(b.name.last));
    setPeople((people) => sortedPeople);
    console.log(sortedPeople);
  };
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  const filterName = () => {
    const filteredPeople = props.people.filter((person) => {
      console.log(person);
      return person.name.first.includes(searchText);
    });

    setPeople((people) => filteredPeople);
    console.log(filteredPeople);
    console.log(searchText);
  };
  return (
    <div className="Result">
      Result
      <br />
      <button onClick={sortName}>Sort by Last Name</button>
      <br />
      <input
        onChange={(e) => handleChange(e)}
        type="text"
        placeholder="Search by First Name"
      />{" "}
      <button onClick={filterName}>Search</button>
      <tr>
        <th scope="row">
          <p>Porfile Picture</p>
        </th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Phone</th>
      </tr>
      {people.map(function (person) {
        return <EmployeeCard {...person} />;
      })}
    </div>
  );
}

export default Result;
