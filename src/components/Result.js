import React from "react";
// import "./Result.css";

function Result(props) {
  return (
    <div className="Result">
      Result
      {props.people.map(function (person) {
        return (
          <li
            onClick={(e) => {
              console.log(person.name.first);
            }}
          >
            {" "}
            {person.name.first}
          </li>
        );
      })}
    </div>
  );
}

export default Result;
