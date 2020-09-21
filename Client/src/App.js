import React from "react";
import Result from "./components/Result.js";
import EmployeeCard from "./components/EmployeeCard.js";
import API from "./utils/API";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { people: [] };
  }
  componentDidMount() {
    fetch("https://randomuser.me/api/?results=50")
      .then((Response) => Response.json())
      .then((data) => {
        this.setState({ people: data.results });
      });
  }
  render() {
    return (
      <div className="App">
        {<h1> Employee Directory</h1>}
        {/* Racing Issue - only render the result component till the data is received from the API */}
        {this.state.people.length > 0 && <Result people={this.state.people} />}
      </div>
    );
  }
}

export default App;
