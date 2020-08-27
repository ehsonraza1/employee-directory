import React from "react";
import Result from "./components/Result.js";
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
        {[1, 2, 3, 4]}
        <Result people={this.state.people} />
      </div>
    );
  }
}

export default App;
